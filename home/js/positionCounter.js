// Get the elements
const counters = document.getElementById('counters');
const partnerLogos = document.getElementById('partner_logos');

// Function to update the position of counters
function updateCountersPosition() {
  const logosBottom = partnerLogos.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;
  const distanceFromBottom = windowHeight - logosBottom;

  // Update the bottom position of counters
  counters.style.bottom = `${distanceFromBottom}px`;
}

// Call the function when the window is resized
window.addEventListener('resize', updateCountersPosition);

// Initial call to position counters
updateCountersPosition();
