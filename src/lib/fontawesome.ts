// Import the core Font Awesome library with minimal bundle size
import { library } from '@fortawesome/fontawesome-svg-core';

// Import only the specific icons used in the project
import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons/faWhatsapp';
import { faFacebookMessenger } from '@fortawesome/free-brands-svg-icons/faFacebookMessenger';

// Add the specific icons to the library
library.add(
  faEnvelope,
  faWhatsapp,
  faFacebookMessenger
);

// Export the specific icons for use in components
export {
  faEnvelope,
  faWhatsapp,
  faFacebookMessenger
}; 