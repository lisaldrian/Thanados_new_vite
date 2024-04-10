$.extend( $.ui.slider.prototype.options, { 
    animate: 300
});

$("#flat-slider")
    .slider({
        max: 50,
        min: 0,
        range: true,
        values: [15, 35]
    })
;