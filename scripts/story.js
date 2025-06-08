// Generate a random GUID
function generateGuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = Math.random() * 16 | 0;
        const v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

// Story content structure
const story = [
    {
        id: generateGuid(),
        title: "The Beginning",
        content: "The old house stood silent at the end of the street, its windows dark and foreboding. Sarah had always been curious about it, but tonight was different. Tonight, she had a key."
    },
    {
        id: generateGuid(),
        title: "The Key",
        content: "The key was cold in her hand, older than she had expected. It had been left to her by her great-aunt, along with a note that simply read: 'Some stories need to be told.'"
    },
    {
        id: generateGuid(),
        title: "The Door",
        content: "The front door creaked open with a sound that seemed to echo through the empty rooms. Sarah stepped inside, her flashlight casting long shadows on the dusty floor. Something felt different about this house, as if it had been waiting for her."
    },
    {
        id: generateGuid(),
        title: "The Library",
        content: "The library was exactly as her great-aunt had described it. Floor-to-ceiling bookshelves lined the walls, filled with leather-bound volumes. But one shelf was empty, save for a single book that seemed to glow in the moonlight."
    },
    {
        id: generateGuid(),
        title: "The Book",
        content: "As Sarah reached for the book, she felt a chill run down her spine. The cover was warm to the touch, and when she opened it, the pages began to turn on their own, revealing words that hadn't been there a moment before."
    }
];

// Initialize the story when the page loads
document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const storyContent = document.querySelector('.story-content');
    const prevButton = document.getElementById('prev-page');
    const nextButton = document.getElementById('next-page');
    const pageIndicator = document.getElementById('page-indicator');
    const themeToggle = document.querySelector('.theme-toggle');

    // Current page state
    let currentPage = 0;

    // Theme state
    let isDarkMode = localStorage.getItem('darkMode') === 'true';

    // Touch state
    let touchStartX = 0;
    let touchEndX = 0;
    const minSwipeDistance = 50; // Minimum distance for a swipe to be registered

    // Initialize the story
    function initStory() {
        // Load saved page from localStorage if available
        const savedPage = localStorage.getItem('currentPage');
        if (savedPage !== null) {
            currentPage = parseInt(savedPage);
        }
        
        // Check URL hash for direct page access
        const hash = window.location.hash;
        if (hash) {
            const pageId = hash.substring(1); // Remove the # symbol
            const pageIndex = story.findIndex(page => page.id === pageId);
            if (pageIndex !== -1) {
                currentPage = pageIndex;
            }
        }
        
        // Initialize theme
        updateTheme();
        
        updatePage();
        updateNavigation();
    }

    // Update the current page content
    function updatePage() {
        const page = story[currentPage];
        storyContent.innerHTML = `<div class="page active" data-page="${page.id}">${page.content}</div>`;
        pageIndicator.textContent = `Page ${currentPage + 1} of ${story.length}`;
        
        // Update URL hash with the page's GUID
        window.location.hash = page.id;
        
        // Save current page to localStorage
        localStorage.setItem('currentPage', currentPage);
    }

    // Update navigation buttons state
    function updateNavigation() {
        prevButton.disabled = currentPage === 0;
        nextButton.disabled = currentPage === story.length - 1;
    }

    // Theme handling
    function updateTheme() {
        document.body.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
        themeToggle.textContent = isDarkMode ? '☀️' : '🌙';
        localStorage.setItem('darkMode', isDarkMode);
    }

    // Touch event handlers
    function handleTouchStart(e) {
        touchStartX = e.touches[0].clientX;
    }

    function handleTouchMove(e) {
        touchEndX = e.touches[0].clientX;
    }

    function handleTouchEnd() {
        const swipeDistance = touchEndX - touchStartX;
        
        if (Math.abs(swipeDistance) >= minSwipeDistance) {
            if (swipeDistance > 0 && currentPage > 0) {
                // Swipe right - go to previous page
                currentPage--;
                updatePage();
                updateNavigation();
            } else if (swipeDistance < 0 && currentPage < story.length - 1) {
                // Swipe left - go to next page
                currentPage++;
                updatePage();
                updateNavigation();
            }
        }
    }

    // Event Listeners
    prevButton.addEventListener('click', () => {
        if (currentPage > 0) {
            currentPage--;
            updatePage();
            updateNavigation();
        }
    });

    nextButton.addEventListener('click', () => {
        if (currentPage < story.length - 1) {
            currentPage++;
            updatePage();
            updateNavigation();
        }
    });

    themeToggle.addEventListener('click', () => {
        isDarkMode = !isDarkMode;
        updateTheme();
    });

    // Touch event listeners
    storyContent.addEventListener('touchstart', handleTouchStart, { passive: true });
    storyContent.addEventListener('touchmove', handleTouchMove, { passive: true });
    storyContent.addEventListener('touchend', handleTouchEnd);

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            prevButton.click();
        } else if (e.key === 'ArrowRight') {
            nextButton.click();
        }
    });

    // Handle URL hash changes
    window.addEventListener('hashchange', () => {
        const hash = window.location.hash;
        if (hash) {
            const pageId = hash.substring(1); // Remove the # symbol
            const pageIndex = story.findIndex(page => page.id === pageId);
            if (pageIndex !== -1 && pageIndex !== currentPage) {
                currentPage = pageIndex;
                updatePage();
                updateNavigation();
            }
        }
    });

    // Initialize the story
    initStory();
}); 