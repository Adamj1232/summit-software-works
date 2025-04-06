import { FC } from 'react';

const GoogleReviewBadge: FC = () => {
  // IMPORTANT: Replace with your actual Google Place ID!
  // Find it here: https://developers.google.com/maps/documentation/places/web-service/place-id
  const GOOGLE_PLACE_ID = 'YOUR_GOOGLE_PLACE_ID_HERE'; 
  
  if (!GOOGLE_PLACE_ID || GOOGLE_PLACE_ID === 'YOUR_GOOGLE_PLACE_ID_HERE') {
    // Don't render the badge if the Place ID isn't set
    console.warn('Google Place ID is not set in GoogleReviewBadge component.');
    return null;
  }

  const reviewUrl = `https://search.google.com/local/writereview?placeid=${GOOGLE_PLACE_ID}`;

  return (
    <div className="google-review-badge mt-4 md:mt-0">
      <a 
        href={reviewUrl}
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Leave a review for Summit Software Works on Google"
        className="inline-flex items-center space-x-2 px-4 py-2 bg-white dark:bg-mountain-700 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 group"
      >
        {/* You can download the Google G logo SVG or use an img tag */}
        <svg className="w-5 h-5 text-red-600 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="currentColor">
          <path d="M21.99 7.87c0-1.46-.12-2.86-.35-4.19H11.3v4.6h6.02c-.26 1.48-1.02 2.74-2.19 3.58v3.01h3.86c2.25-2.07 3.57-5.07 3.57-8.6zm-10.69 9.1c2.57 0 4.72-0.86 6.3-2.32l-3.86-3.01c-.86.57-1.96.91-3.13.91-2.4 0-4.44-1.62-5.16-3.79H2.91v3.11C4.5 18.97 7.7 21 11.3 21zM5.01 12c-.19-.57-.3-.18-.3-1.81s.11-1.24.3-1.81V5.28H2.91c-1.16 2.28-1.81 4.76-1.81 7.41s.65 5.13 1.81 7.41l2.1-3.11z"/>
        </svg>
        <span className="text-sm font-medium text-gray-700 dark:text-mountain-200 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
          Review us on Google
        </span>
      </a>
    </div>
  );
};

export default GoogleReviewBadge; 