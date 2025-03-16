
// src/components/seo/SchemaMarkup.jsx
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { generateSchemaMarkup } from '../../utils/seo';

const SchemaMarkup = ({ page, data }) => {
  return (
    <Helmet>
      <script type="application/ld+json">
        {generateSchemaMarkup(page, data)}
      </script>
    </Helmet>
  );
};

export default SchemaMarkup;



// Additional SEO Best Practices implemented throughout the site:

// 1. Responsive Design
// - All pages are fully responsive, adapting to mobile, tablet, and desktop screens
// - Mobile-friendly navigation with appropriate touch targets

// 2. Performance Optimization
// - Code splitting and lazy loading implemented with React.lazy and Suspense
// - Image optimization with responsive images and WebP format
// - Critical CSS loaded inline
// - Deferred loading of non-critical resources

// 3. Accessibility Features
// - Semantic HTML structure with appropriate headings hierarchy
// - ARIA attributes for improved screen reader compatibility
// - Sufficient color contrast ratios for text readability
// - Keyboard navigation support
// - Alt text for all images

// 4. Technical SEO
// - XML sitemap generation
// - Robots.txt configuration
// - 301 redirects for URL changes
// - Custom 404 error page
// - Breadcrumb navigation

// 5. Page Speed Optimization
// - Minified CSS and JavaScript
// - Browser caching implementation
// - Code splitting for optimized load times
// - Reduced server response times
// - Optimized asset delivery

// 6. Content Strategy
// - Keyword-rich content throughout the site
// - Regular blog updates with relevant industry topics
// - Clear call-to-actions on all pages
// - Unique meta descriptions for each page
// - Internal linking structure