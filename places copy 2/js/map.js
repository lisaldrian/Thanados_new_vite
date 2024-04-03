document.addEventListener('DOMContentLoaded', function () {
    // Function to initialize the map and set its position
    function initializeMap() {
        // Get the navbar element
        var navbar = document.querySelector('#mynavbar');

        // Get the height of the navbar
        var navbarHeight = navbar.offsetHeight;

        // Get the position of the navbar relative to the viewport
        var navbarRect = navbar.getBoundingClientRect();

        // Calculate the top position for the map
        var mapTop = navbarRect.bottom + window.scrollY;

        // Initialize the map
        var map = L.map('map').setView([47.5162, 14.5501], 6); // Example coordinates

        // Add a tile layer to the map
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
        }).addTo(map);

        // Set the top position of the map
        map.getContainer().style.position = 'relative';
        map.getContainer().style.top = mapTop - navbarHeight + 'px';

        console.log("mapTop:", mapTop);
        console.log("navbarHeight:", navbarHeight);
    

        // Call the resizeMap function initially and whenever the window is resized
        window.addEventListener('resize', resizeMap);
        resizeMap();
    }

    // Call the initializeMap function when the DOM content is loaded
    initializeMap();
});
