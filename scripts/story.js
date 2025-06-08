// Story content structure
const story = [
    {
        id: 1,
        title: "Chapter 1",
        content: "Welcome to the story. This is the first page."
    }
    // More pages will be added here
];

// DOM Elements
const storyContent = document.querySelector('.story-content');
const prevButton = document.getElementById('prev-page');
const nextButton = document.getElementById('next-page');
const pageIndicator = document.getElementById('page-indicator');
const themeToggle = document.querySelector('.theme-toggle');
const tocToggle = document.querySelector('.toc-toggle');
const toc = document.querySelector('.toc');
const tocList = document.getElementById('toc-list');

// Current page state
let currentPage = 0;

// Theme state
let isDarkMode = localStorage.getItem('darkMode') === 'true';

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
        const pageId = parseInt(hash.substring(1));
        const pageIndex = story.findIndex(page => page.id === pageId);
        if (pageIndex !== -1) {
            currentPage = pageIndex;
        }
    }
    
    // Initialize theme
    updateTheme();
    
    // Initialize table of contents
    initTableOfContents();
    
    updatePage();
    updateNavigation();
}

// Update the current page content
function updatePage() {
    const page = story[currentPage];
    storyContent.innerHTML = `<div class="page active" data-page="${page.id}">${page.content}</div>`;
    pageIndicator.textContent = `Page ${currentPage + 1} of ${story.length}`;
    
    // Update URL hash
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

// Table of contents
function initTableOfContents() {
    tocList.innerHTML = story.map((page, index) => `
        <li>
            <a href="#${page.id}" class="toc-link" data-page="${index}">
                ${page.title || `Page ${index + 1}`}
            </a>
        </li>
    `).join('');
    
    // Add click handlers to TOC links
    document.querySelectorAll('.toc-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const pageIndex = parseInt(link.dataset.page);
            currentPage = pageIndex;
            updatePage();
            updateNavigation();
            toc.classList.remove('visible');
        });
    });
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

tocToggle.addEventListener('click', () => {
    toc.classList.toggle('visible');
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        prevButton.click();
    } else if (e.key === 'ArrowRight') {
        nextButton.click();
    } else if (e.key === 'Escape') {
        toc.classList.remove('visible');
    }
});

// Handle URL hash changes
window.addEventListener('hashchange', () => {
    const hash = window.location.hash;
    if (hash) {
        const pageId = parseInt(hash.substring(1));
        const pageIndex = story.findIndex(page => page.id === pageId);
        if (pageIndex !== -1 && pageIndex !== currentPage) {
            currentPage = pageIndex;
            updatePage();
            updateNavigation();
        }
    }
});

// Initialize the story when the page loads
document.addEventListener('DOMContentLoaded', initStory); 