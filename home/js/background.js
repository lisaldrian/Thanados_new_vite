window.addEventListener('load', function () {
  var container = document.getElementById('background-container');
  var image = new Image();

  image.onload = function () {
    console.log('Image loaded');
    console.log('Image width:', image.width);
    console.log('Image height:', image.height);

    var aspectRatio = image.width / image.height;
    var containerWidth = container.offsetWidth;
    var containerHeight = containerWidth / aspectRatio;

    container.style.height = containerHeight + 'px';
  };

  image.src = '/images/Blank_map_of_Europe_central_crop.png';
});

