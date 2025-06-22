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
            title: "The Arrival",
            contentFile: "content/story0-page1.md"
        },
        {
            id: generateGuid(),
            title: "The Weather",
            contentFile: "content/story0-page2.md"
        },
        {
            id: generateGuid(),
            title: "The Intrusion",
            contentFile: "content/story0-page3.md"
        },
        {
            id: generateGuid(),
            title: "The Facade",
            contentFile: "content/story0-page4.md"
        },
        {
            id: generateGuid(),
            title: "The Map",
            contentFile: "content/story0-page5.md"
        },
        {
            id: generateGuid(),
            title: "The Path",
            contentFile: "content/story0-page6.md"
        },
        {
            id: generateGuid(),
            title: "The Corner",
            contentFile: "content/story0-page7.md"
        },
        {
            id: generateGuid(),
            title: "The Garden",
            contentFile: "content/story0-page8.md"
        }
    ],
    
    // Story 1: The Library Path (15 pages)
    [
        {
            id: generateGuid(),
            title: "The Arrival",
            contentFile: "content/story1-page1.md"
        },
        {
            id: generateGuid(),
            title: "The Engine",
            contentFile: "content/story1-page2.md"
        },
        {
            id: generateGuid(),
            title: "The Silence",
            contentFile: "content/story1-page3.md"
        },
        {
            id: generateGuid(),
            title: "The Walkway",
            contentFile: "content/story1-page4.md"
        },
        {
            id: generateGuid(),
            title: "The Robin",
            contentFile: "content/story1-page5.md"
        },
        {
            id: generateGuid(),
            title: "The Song",
            contentFile: "content/story1-page6.md"
        },
        {
            id: generateGuid(),
            title: "The Path",
            contentFile: "content/story1-page7.md"
        },
        {
            id: generateGuid(),
            title: "The Balcony",
            contentFile: "content/story1-page8.md"
        },
        {
            id: generateGuid(),
            title: "The Descent",
            contentFile: "content/story1-page9.md"
        },
        {
            id: generateGuid(),
            title: "The Archway",
            contentFile: "content/story1-page10.md"
        },
        {
            id: generateGuid(),
            title: "The Pool",
            contentFile: "content/story1-page11.md"
        },
        {
            id: generateGuid(),
            title: "The Bench",
            contentFile: "content/story1-page12.md"
        },
        {
            id: generateGuid(),
            title: "The Boxes",
            contentFile: "content/story1-page13.md"
        },
        {
            id: generateGuid(),
            title: "The Ashes",
            contentFile: "content/story1-page14.md"
        },
        {
            id: generateGuid(),
            title: "The Bridge",
            contentFile: "content/story1-page15.md"
        }
    ],
    
    // Story 2: The Staircase Path (27 pages)
    [
        {
            id: generateGuid(),
            title: "The Arrival",
            contentFile: "content/story2-page1.md"
        },
        {
            id: generateGuid(),
            title: "The Engine",
            contentFile: "content/story2-page2.md"
        },
        {
            id: generateGuid(),
            title: "The Silence",
            contentFile: "content/story2-page3.md"
        },
        {
            id: generateGuid(),
            title: "The Walkway",
            contentFile: "content/story2-page4.md"
        },
        {
            id: generateGuid(),
            title: "The Envelope",
            contentFile: "content/story2-page5.md"
        },
        {
            id: generateGuid(),
            title: "The Note",
            contentFile: "content/story2-page6.md"
        },
        {
            id: generateGuid(),
            title: "The Mystery",
            contentFile: "content/story2-page7.md"
        },
        {
            id: generateGuid(),
            title: "The Robin",
            contentFile: "content/story2-page8.md"
        },
        {
            id: generateGuid(),
            title: "The Memory",
            contentFile: "content/story2-page9.md"
        },
        {
            id: generateGuid(),
            title: "The Path",
            contentFile: "content/story2-page10.md"
        },
        {
            id: generateGuid(),
            title: "The Balcony",
            contentFile: "content/story2-page11.md"
        },
        {
            id: generateGuid(),
            title: "The Descent",
            contentFile: "content/story2-page12.md"
        },
        {
            id: generateGuid(),
            title: "The Archway",
            contentFile: "content/story2-page13.md"
        },
        {
            id: generateGuid(),
            title: "The Pool",
            contentFile: "content/story2-page14.md"
        },
        {
            id: generateGuid(),
            title: "The Fountain",
            contentFile: "content/story2-page15.md"
        },
        {
            id: generateGuid(),
            title: "The Bench",
            contentFile: "content/story2-page16.md"
        },
        {
            id: generateGuid(),
            title: "The Boxes",
            contentFile: "content/story2-page17.md"
        },
        {
            id: generateGuid(),
            title: "The Ashes",
            contentFile: "content/story2-page18.md"
        },
        {
            id: generateGuid(),
            title: "The Rose Garden",
            contentFile: "content/story2-page19.md"
        },
        {
            id: generateGuid(),
            title: "The Wall",
            contentFile: "content/story2-page20.md"
        },
        {
            id: generateGuid(),
            title: "The Stream",
            contentFile: "content/story2-page21.md"
        },
        {
            id: generateGuid(),
            title: "The Memory",
            contentFile: "content/story2-page22.md"
        },
        {
            id: generateGuid(),
            title: "The Dinner",
            contentFile: "content/story2-page23.md"
        },
        {
            id: generateGuid(),
            title: "The Advice",
            contentFile: "content/story2-page24.md"
        },
        {
            id: generateGuid(),
            title: "The Bridge",
            contentFile: "content/story2-page25.md"
        },
        {
            id: generateGuid(),
            title: "The Fog",
            contentFile: "content/story2-page26.md"
        },
        {
            id: generateGuid(),
            title: "The End",
            contentFile: "content/story2-page27.md"
        }
    ],
    
    // Story 3: The Corridor Path (47 pages)
    [
        {
            id: generateGuid(),
            title: "The Arrival",
            contentFile: "content/story3-page1.md"
        },
        {
            id: generateGuid(),
            title: "The Engine",
            contentFile: "content/story3-page2.md"
        },
        {
            id: generateGuid(),
            title: "The Door",
            contentFile: "content/story3-page3.md"
        },
        {
            id: generateGuid(),
            title: "The Driver",
            contentFile: "content/story3-page4.md"
        },
        {
            id: generateGuid(),
            title: "The Journey",
            contentFile: "content/story3-page5.md"
        },
        {
            id: generateGuid(),
            title: "The Walkway",
            contentFile: "content/story3-page6.md"
        },
        {
            id: generateGuid(),
            title: "The Manor",
            contentFile: "content/story3-page7.md"
        },
        {
            id: generateGuid(),
            title: "The Envelope",
            contentFile: "content/story3-page8.md"
        },
        {
            id: generateGuid(),
            title: "The Note",
            contentFile: "content/story3-page9.md"
        },
        {
            id: generateGuid(),
            title: "The Mystery",
            contentFile: "content/story3-page10.md"
        },
        {
            id: generateGuid(),
            title: "The Robin",
            contentFile: "content/story3-page11.md"
        },
        {
            id: generateGuid(),
            title: "The Decision",
            contentFile: "content/story3-page12.md"
        },
        {
            id: generateGuid(),
            title: "The Memory",
            contentFile: "content/story3-page13.md"
        },
        {
            id: generateGuid(),
            title: "The Path",
            contentFile: "content/story3-page14.md"
        },
        {
            id: generateGuid(),
            title: "The Balcony",
            contentFile: "content/story3-page15.md"
        },
        {
            id: generateGuid(),
            title: "The Descent",
            contentFile: "content/story3-page16.md"
        },
        {
            id: generateGuid(),
            title: "The Archway",
            contentFile: "content/story3-page17.md"
        },
        {
            id: generateGuid(),
            title: "The Pool",
            contentFile: "content/story3-page18.md"
        },
        {
            id: generateGuid(),
            title: "The Fountain",
            contentFile: "content/story3-page19.md"
        },
        {
            id: generateGuid(),
            title: "The Bench",
            contentFile: "content/story3-page20.md"
        },
        {
            id: generateGuid(),
            title: "The Memory",
            contentFile: "content/story3-page21.md"
        },
        {
            id: generateGuid(),
            title: "The Boxes",
            contentFile: "content/story3-page22.md"
        },
        {
            id: generateGuid(),
            title: "The Past",
            contentFile: "content/story3-page23.md"
        },
        {
            id: generateGuid(),
            title: "The Ashes",
            contentFile: "content/story3-page24.md"
        },
        {
            id: generateGuid(),
            title: "The Rose Garden",
            contentFile: "content/story3-page25.md"
        },
        {
            id: generateGuid(),
            title: "The Wall",
            contentFile: "content/story3-page26.md"
        },
        {
            id: generateGuid(),
            title: "The Stream",
            contentFile: "content/story3-page27.md"
        },
        {
            id: generateGuid(),
            title: "The Memory",
            contentFile: "content/story3-page28.md"
        },
        {
            id: generateGuid(),
            title: "The Dinner",
            contentFile: "content/story3-page29.md"
        },
        {
            id: generateGuid(),
            title: "The Advice",
            contentFile: "content/story3-page30.md"
        },
        {
            id: generateGuid(),
            title: "The House",
            contentFile: "content/story3-page31.md"
        },
        {
            id: generateGuid(),
            title: "The Mind",
            contentFile: "content/story3-page32.md"
        },
        {
            id: generateGuid(),
            title: "The Bridge",
            contentFile: "content/story3-page33.md"
        },
        {
            id: generateGuid(),
            title: "The Fog",
            contentFile: "content/story3-page34.md"
        },
        {
            id: generateGuid(),
            title: "The Wuthering",
            contentFile: "content/story3-page35.md"
        },
        {
            id: generateGuid(),
            title: "The Maze",
            contentFile: "content/story3-page36.md"
        },
        {
            id: generateGuid(),
            title: "The Map",
            contentFile: "content/story3-page37.md"
        },
        {
            id: generateGuid(),
            title: "The Request",
            contentFile: "content/story3-page38.md"
        },
        {
            id: generateGuid(),
            title: "The Secret",
            contentFile: "content/story3-page39.md"
        },
        {
            id: generateGuid(),
            title: "The Escape",
            contentFile: "content/story3-page40.md"
        },
        {
            id: generateGuid(),
            title: "The Navigation",
            contentFile: "content/story3-page41.md"
        },
        {
            id: generateGuid(),
            title: "The Door",
            contentFile: "content/story3-page42.md"
        },
        {
            id: generateGuid(),
            title: "The Lock",
            contentFile: "content/story3-page43.md"
        },
        {
            id: generateGuid(),
            title: "The Despair",
            contentFile: "content/story3-page44.md"
        },
        {
            id: generateGuid(),
            title: "The Break",
            contentFile: "content/story3-page45.md"
        },
        {
            id: generateGuid(),
            title: "The Garden",
            contentFile: "content/story3-page46.md"
        },
        {
            id: generateGuid(),
            title: "The Secret Garden",
            contentFile: "content/story3-page47.md"
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
    { storyIndex: 1, pageIndex: 9 }, // Story 0 ends -> go to Story 1, page 1
    { storyIndex: 2, pageIndex: 17 }, // Story 1 ends -> go to Story 2, page 1
    { storyIndex: 3, pageIndex: 34 }, // Story 2 ends -> go to Story 3, page 1
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
    let allContentLoaded = false;

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

    // Preload all content
    async function preloadAllContent() {
        console.log('Preloading all story content...');
        
        const loadPromises = [];
        
        // Create promises for loading all content files
        for (let storyIndex = 0; storyIndex < stories.length; storyIndex++) {
            for (let pageIndex = 0; pageIndex < stories[storyIndex].length; pageIndex++) {
                const page = stories[storyIndex][pageIndex];
                if (page.contentFile) {
                    loadPromises.push(loadMarkdownContent(page.contentFile));
                }
            }
        }
        
        try {
            // Wait for all content to load
            await Promise.all(loadPromises);
            allContentLoaded = true;
            console.log('All content preloaded successfully!');
        } catch (error) {
            console.error('Error preloading content:', error);
            // Continue anyway - individual pages will load as needed
        }
    }

    // Initialize the story
    async function initStory() {
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
        
        // Preload all content first, then show the current page
        await preloadAllContent();
        updatePage();
        updateNavigation();
    }

    // Update the current page content
    function updatePage() {
        const currentStory = getCurrentStory();
        const page = currentStory[currentPageIndex];
        
        // Get content from cache (should be preloaded)
        const htmlContent = contentCache.get(page.contentFile) || `<p>Loading...</p>`;
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
    function goToNext() {
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
        
        updatePage();
        updateNavigation();
    }

    // Navigate to previous page (but not previous story)
    function goToPrevious() {
        if (currentPageIndex > 0) {
            // Go to previous page in current story only
            currentPageIndex--;
            updatePage();
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
    window.addEventListener('hashchange', () => {
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
                        updatePage();
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