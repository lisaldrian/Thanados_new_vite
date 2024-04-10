document.addEventListener('DOMContentLoaded', function () {
  // Function to initialize the map and set its position
  function initializeMap() {

    // Initialize the map
    var map = L.map('map').setView([47.5162, 14.5501], 6); // Example coordinates

    // Add a tile layer to the map
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors'
    }).addTo(map);

  }

  // Call the initializeMap function when the DOM content is loaded
  initializeMap();
});
