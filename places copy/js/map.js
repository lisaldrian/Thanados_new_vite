document.addEventListener('DOMContentLoaded', function () {
    // Function to initialize the map and set its position
    function initializeMap() {
        // Get the navbar element
        var navbar = document.querySelector('.navbar');

        // Get the height of the navbar
        var navbarHeight = navbar.offsetHeight;

        // Get the position of the navbar relative to the viewport
        var navbarRect = navbar.getBoundingClientRect();

        // Calculate the top position for the map
        var mapTop = navbarRect.bottom;

        // Get the width of the tab_places element
        var tabPlacesWidth = document.querySelector('.tab_places').offsetWidth;

        // Calculate the right position for the map
        var mapRight = tabPlacesWidth;

        // Calculate the adjusted initial view for the map
        var adjustedMapView = [47.5162, 14.5501]; // Example coordinates

        // Initialize the map
        var map = L.map('map').setView(adjustedMapView, 6);

        // Add a tile layer to the map
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors'
        }).addTo(map);

        // Set the top and right positions of the map
        map.getContainer().style.position = 'absolute';
        map.getContainer().style.top = mapTop + 'px';
        map.getContainer().style.right = mapRight + 'px';

        // Optionally, you can set the size of the map dynamically based on the window size
        function resizeMap() {
            var mapElement = document.getElementById('map');
            mapElement.style.height = window.innerHeight - mapTop + 'px';
            mapElement.style.width = window.innerWidth - tabPlacesWidth + 'px';
            map.invalidateSize();
        }

        // Call the resizeMap function initially and whenever the window is resized
        window.addEventListener('resize', resizeMap);
        resizeMap();
    }

    // Call the initializeMap function when the DOM content is loaded
    initializeMap();
});
