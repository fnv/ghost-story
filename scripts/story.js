// Generate a random GUID
function generateGuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = Math.random() * 16 | 0;
        const v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

// Multi-dimensional story structure with markdown file references
const stories = [
    // Story 0: The Beginning
    [
        {
            id: generateGuid(),
            title: "The House",
            contentFile: "content/story0-page1.md"
        },
        {
            id: generateGuid(),
            title: "The Door",
            contentFile: "content/story0-page2.md"
        },
        {
            id: generateGuid(),
            title: "The Choice",
            contentFile: "content/story0-page3.md"
        }
    ],
    
    // Story 1: The Library Path
    [
        {
            id: generateGuid(),
            title: "The Library",
            contentFile: "content/story1-page1.md"
        },
        {
            id: generateGuid(),
            title: "The Book",
            contentFile: "content/story1-page2.md"
        },
        {
            id: generateGuid(),
            title: "The Revelation",
            contentFile: "content/story1-page3.md"
        }
    ],
    
    // Story 2: The Staircase Path
    [
        {
            id: generateGuid(),
            title: "The Stairs",
            contentFile: "content/story2-page1.md"
        },
        {
            id: generateGuid(),
            title: "The Landing",
            contentFile: "content/story2-page2.md"
        },
        {
            id: generateGuid(),
            title: "The Mirror",
            contentFile: "content/story2-page3.md"
        }
    ],
    
    // Story 3: The Corridor Path
    [
        {
            id: generateGuid(),
            title: "The Corridor",
            contentFile: "content/story3-page1.md"
        },
        {
            id: generateGuid(),
            title: "The Garden",
            contentFile: "content/story3-page2.md"
        },
        {
            id: generateGuid(),
            title: "The Fountain",
            contentFile: "content/story3-page3.md"
        }
    ],
    
    // Story 4: The Laughter Path
    [
        {
            id: generateGuid(),
            title: "The Party",
            contentFile: "content/story4-page1.md"
        },
        {
            id: generateGuid(),
            title: "The Dance",
            contentFile: "content/story4-page2.md"
        },
        {
            id: generateGuid(),
            title: "The Memory",
            contentFile: "content/story4-page3.md"
        }
    ],
    
    // Story 5: The Crying Path
    [
        {
            id: generateGuid(),
            title: "The Nursery",
            contentFile: "content/story5-page1.md"
        },
        {
            id: generateGuid(),
            title: "The Lullaby",
            contentFile: "content/story5-page2.md"
        },
        {
            id: generateGuid(),
            title: "The Peace",
            contentFile: "content/story5-page3.md"
        }
    ]
];

// Branching logic: when you reach the end of a story, which story and page do you go to next?
const storyBranches = [
    { storyIndex: 1, pageIndex: 1 }, // Story 0 ends -> go to Story 1, page 1
    { storyIndex: 2, pageIndex: 1 }, // Story 1 ends -> go to Story 2, page 1
    { storyIndex: 3, pageIndex: 1 }, // Story 2 ends -> go to Story 3, page 1
    { storyIndex: 4, pageIndex: 1 }, // Story 3 ends -> go to Story 4, page 1
    { storyIndex: 5, pageIndex: 1 }, // Story 4 ends -> go to Story 5, page 1
    null  // Story 5 ends -> this is the end, no more branching
];

// Initialize the story when the page loads
document.addEventListener('DOMContentLoaded', () => {
    // DOM Elements
    const storyContent = document.querySelector('.story-content');
    const prevButton = document.getElementById('prev-page');
    const nextButton = document.getElementById('next-page');
    const pageIndicator = document.getElementById('page-indicator');
    const themeToggle = document.querySelector('.theme-toggle');

    // Current story and page state
    let currentStoryIndex = 0;
    let currentPageIndex = 0;

    // Theme state
    let isDarkMode = localStorage.getItem('darkMode') === 'true';

    // Touch state
    let touchStartX = 0;
    let touchEndX = 0;
    const minSwipeDistance = 50; // Minimum distance for a swipe to be registered

    // Content cache
    const contentCache = new Map();

    // Get current story
    function getCurrentStory() {
        return stories[currentStoryIndex];
    }

    // Load markdown content from file
    async function loadMarkdownContent(contentFile) {
        // Check cache first
        if (contentCache.has(contentFile)) {
            return contentCache.get(contentFile);
        }

        try {
            const response = await fetch(contentFile);
            if (!response.ok) {
                throw new Error(`Failed to load ${contentFile}: ${response.status}`);
            }
            const markdown = await response.text();
            const html = marked.parse(markdown);
            
            // Cache the result
            contentCache.set(contentFile, html);
            return html;
        } catch (error) {
            console.error('Error loading markdown content:', error);
            return `<h1>Error Loading Content</h1><p>Unable to load the story content. Please try refreshing the page.</p>`;
        }
    }

    // Initialize the story
    function initStory() {
        // Load saved story and page from localStorage if available
        const savedStory = localStorage.getItem('currentStoryIndex');
        const savedPage = localStorage.getItem('currentPageIndex');
        if (savedStory !== null && savedPage !== null) {
            currentStoryIndex = parseInt(savedStory);
            currentPageIndex = parseInt(savedPage);
        }
        
        // Check URL hash for direct page access
        const hash = window.location.hash;
        if (hash) {
            const pageId = hash.substring(1); // Remove the # symbol
            // Search through all stories to find the page
            for (let storyIndex = 0; storyIndex < stories.length; storyIndex++) {
                const pageIndex = stories[storyIndex].findIndex(page => page.id === pageId);
                if (pageIndex !== -1) {
                    currentStoryIndex = storyIndex;
                    currentPageIndex = pageIndex;
                    break;
                }
            }
        }
        
        // Initialize theme
        updateTheme();
        
        updatePage();
        updateNavigation();
    }

    // Update the current page content
    async function updatePage() {
        const currentStory = getCurrentStory();
        const page = currentStory[currentPageIndex];
        
        // Show loading state
        storyContent.innerHTML = `<div class="page active" data-page="${page.id}"><p>Loading...</p></div>`;
        
        // Load and render markdown content
        const htmlContent = await loadMarkdownContent(page.contentFile);
        storyContent.innerHTML = `<div class="page active" data-page="${page.id}">${htmlContent}</div>`;
        
        // Show only current story page count
        pageIndicator.textContent = `Page ${currentPageIndex + 1} of ${currentStory.length}`;
        
        // Update URL hash with the page's GUID
        window.location.hash = page.id;
        
        // Save current story and page to localStorage
        localStorage.setItem('currentStoryIndex', currentStoryIndex);
        localStorage.setItem('currentPageIndex', currentPageIndex);
        
        // Update background color when story changes
        updateBackgroundColor();
    }

    // Update navigation buttons state
    function updateNavigation() {
        const currentStory = getCurrentStory();
        const isFirstPage = currentPageIndex === 0;
        const isLastPage = currentPageIndex === currentStory.length - 1;
        const isLastStory = currentStoryIndex === stories.length - 1;
        
        // Disable previous button if it's the first page of any story
        prevButton.disabled = isFirstPage;
        
        // Disable next button if we're on the last page of the last story (the true end)
        nextButton.disabled = isLastPage && isLastStory;
    }

    // Navigate to next page or story
    async function goToNext() {
        const currentStory = getCurrentStory();
        
        if (currentPageIndex < currentStory.length - 1) {
            // Go to next page in current story
            currentPageIndex++;
        } else {
            // End of story - branch to next story
            const branch = storyBranches[currentStoryIndex];
            if (branch) {
                currentStoryIndex = branch.storyIndex;
                currentPageIndex = branch.pageIndex;
            }
        }
        
        await updatePage();
        updateNavigation();
    }

    // Navigate to previous page (but not previous story)
    async function goToPrevious() {
        if (currentPageIndex > 0) {
            // Go to previous page in current story only
            currentPageIndex--;
            await updatePage();
            updateNavigation();
        }
        // Cannot go to previous story - that path is blocked
    }

    // Theme handling
    function updateTheme() {
        document.body.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
        themeToggle.textContent = isDarkMode ? '☀️' : '🌙';
        localStorage.setItem('darkMode', isDarkMode);
        updateBackgroundColor();
    }

    // Update background color based on story index
    function updateBackgroundColor() {
        const totalStories = stories.length;
        const progress = currentStoryIndex / (totalStories - 1); // 0 to 1
        
        if (isDarkMode) {
            // Dark theme: start with dark gray, transition to dark green
            const startColor = [26, 26, 26]; // #1a1a1a
            const endColor = [20, 60, 20];   // Dark green
            const currentColor = startColor.map((start, i) => 
                Math.round(start + (endColor[i] - start) * progress)
            );
            document.body.style.backgroundColor = `rgb(${currentColor[0]}, ${currentColor[1]}, ${currentColor[2]})`;
        } else {
            // Light theme: start with light gray, transition to brilliant garden green
            const startColor = [245, 245, 245]; // #f5f5f5
            const endColor = [34, 139, 34];     // Forest green
            const currentColor = startColor.map((start, i) => 
                Math.round(start + (endColor[i] - start) * progress)
            );
            document.body.style.backgroundColor = `rgb(${currentColor[0]}, ${currentColor[1]}, ${currentColor[2]})`;
        }
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
            if (swipeDistance > 0) {
                // Swipe right - go to previous page (but not previous story)
                goToPrevious();
            } else {
                // Swipe left - go to next page
                goToNext();
            }
        }
    }

    // Event Listeners
    prevButton.addEventListener('click', goToPrevious);
    nextButton.addEventListener('click', goToNext);

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
            goToPrevious();
        } else if (e.key === 'ArrowRight') {
            goToNext();
        }
    });

    // Handle URL hash changes
    window.addEventListener('hashchange', async () => {
        const hash = window.location.hash;
        if (hash) {
            const pageId = hash.substring(1); // Remove the # symbol
            // Search through all stories to find the page
            for (let storyIndex = 0; storyIndex < stories.length; storyIndex++) {
                const pageIndex = stories[storyIndex].findIndex(page => page.id === pageId);
                if (pageIndex !== -1) {
                    if (storyIndex !== currentStoryIndex || pageIndex !== currentPageIndex) {
                        currentStoryIndex = storyIndex;
                        currentPageIndex = pageIndex;
                        await updatePage();
                        updateNavigation();
                    }
                    break;
                }
            }
        }
    });

    // Initialize the story
    initStory();
}); 