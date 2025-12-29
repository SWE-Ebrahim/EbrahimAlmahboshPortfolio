# Ebrahim Almahbosh - Portfolio

A modern, responsive portfolio website showcasing my projects and skills as a software engineer.

## Features

- Responsive design optimized for all devices
- Smooth animations and transitions
- Project showcase with filtering capabilities
- Detailed project pages with image galleries
- Modern UI with gradient backgrounds and glass-morphism effects
- SEO optimized for better search engine visibility

## Technology Stack

- Next.js 16.1.1
- React 19.2.3
- TypeScript
- Tailwind CSS
- Framer Motion for animations
- Lucide React for icons

## SEO Features

This portfolio is optimized for search engines with:

- Comprehensive metadata for all pages
- Open Graph tags for social media sharing
- Schema markup for rich snippets
- Sitemap and robots.txt configuration
- Semantic HTML structure
- Responsive design for mobile optimization

## Deployment

### Environment Configuration

Before deployment, update the following in your code:

1. Update canonical URLs in `layout.tsx` and page files
2. Add your Google verification code in `layout.tsx`
3. Update social media handles in `layout.tsx`
4. Add your Open Graph image in the `public` folder
5. Update the sitemap with your domain name

### Next.js Static Export

For static hosting:

```bash
npm run build
```

The output will be in the `out` directory.

### Vercel Deployment

For deployment on Vercel (recommended):

1. Push your code to a GitHub repository
2. Connect your repository to Vercel
3. Set the build command to `npm run build`
4. Set the output directory to `out` (for static) or leave blank for SSR

### Other Platforms

For other platforms like Netlify, Cloudflare Pages, or traditional hosting:

1. Build the project: `npm run build`
2. Serve the contents of the `out` folder

## SEO Optimization Notes

### Required Actions Before Launch

1. **Update Domain**: Replace all instances of `https://yourportfolio.com` with your actual domain
2. **Add Verification Codes**: Add your Google Search Console and other verification codes
3. **Add Open Graph Image**: Place an `og-image.jpg` in the `public` folder (1200x630 pixels recommended)
4. **Update Sitemap**: Update the sitemap with your domain and adjust as needed
5. **Social Profiles**: Update social media links in the metadata

### Performance Optimization

- Images are optimized using Next.js Image component
- CSS is purged and optimized with Tailwind
- JavaScript is chunked and loaded efficiently
- Fonts are optimized with next/font

### Accessibility

- Semantic HTML structure
- Proper heading hierarchy
- ARIA attributes where appropriate
- Color contrast compliant with WCAG

## Customization

To customize this portfolio:

1. Update the content in each component file
2. Replace images in the assets folder
3. Modify colors in `globals.css` and Tailwind config
4. Update metadata in `layout.tsx`

## License

This project is private and for personal use only.