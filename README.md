# Ghost Story

An interactive web-based story viewer that presents content one page at a time. Built with vanilla JavaScript, HTML, and CSS.

## Features

- Clean, responsive design
- Keyboard navigation (left/right arrows)
- Progress saving
- Mobile-friendly interface
- Smooth page transitions
- Dark/light mode
- Table of contents
- Direct page access via URL

## Setup

1. Clone this repository
2. Open `index.html` in your browser
3. Start reading!

## Development

To modify the story content, edit the `story` array in `scripts/story.js`. Each page should follow this format:

```javascript
{
    id: number,
    title: "Chapter Title", // optional
    content: "Your story content here"
}
```

## Deployment

This project is configured for automatic deployment to GitHub Pages. To deploy:

1. Push your changes to the `main` branch
2. GitHub Actions will automatically deploy to GitHub Pages
3. Your story will be available at `https://[your-username].github.io/ghost-story`

### Manual Deployment

If you prefer to deploy manually:

1. Go to your repository's Settings
2. Navigate to "Pages" in the sidebar
3. Under "Source", select "Deploy from a branch"
4. Select the branch you want to deploy (usually `main`)
5. Click "Save"

## License

This project is licensed under the MIT License - see the LICENSE file for details.
