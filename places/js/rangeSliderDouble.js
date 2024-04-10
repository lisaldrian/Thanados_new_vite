let slider2 = new RangeSliderPips({
    target: document.getElementById("slider2"),
    props: {
      min: -500,
      max: 1500,
      range: true,
      pushy: true,
      values: [500, 1000],
      step: 10,
      pips: true,
      pipstep: 10,
      all: "label",
      //suffix: " AD", "BC" for values
    }
  });
  
  let $btn = document.querySelector(".s1btn");
  let $s21 = document.querySelector(".s21");
  let $s22 = document.querySelector(".s22");
  let $s23 = document.querySelector(".s23");
  let $s24 = document.querySelector(".s24");
  
  // slider 2 bindings 
  
  slider2.$on('change', function(e) {
    $s21.value = e.detail.values[0];
    $s22.value = e.detail.values[1];
    $s23.value = e.detail.values[0]; 
    $s24.value = e.detail.values[1];
  });
  
  $s21.addEventListener("change", (e) => {
    slider2.$set({ values: [ $s21.value, $s22.value ]});
  });
  
  $s22.addEventListener("change", (e) => {
    slider2.$set({ values: [ $s21.value, $s22.value ]});
  });
  
  $s23.addEventListener("change", (e) => {
    slider2.$set({ values: [ $s23.value, $s24.value ]});
  });
  
  $s24.addEventListener("change", (e) => {
    slider2.$set({ values: [ $s23.value, $s24.value ]});
  });
  
  $btn.addEventListener( "click", function() {
    $btn.innerText = "the values are: " + slider2.get();
    setTimeout(() => {
      $btn.innerText = "Get Values";
    }, 1500 );
  });
  