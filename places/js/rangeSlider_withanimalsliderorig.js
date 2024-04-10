let s1vals = [-20, -10, 10, 20];
let s1animals = ["🐬", "🐢", "🐷", "🦁"];
let slider = new RangeSliderPips({
  target: document.getElementById("slider"),
  props: {
    min: -50,
    max: 50,
    values: s1vals,
    pips: true,
    pipstep: 1,
    all: "label",
    float: true,
    handleFormatter: (v) => {
      return v;
    }
  }
});

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

// slider 1 bindings

function setHandles(e) {
  let labels = e.detail.values;
  let handles = document.getElementById("slider").querySelectorAll(".rangeHandle");
  let handle = document.getElementById("slider").querySelectorAll(".rangeHandle.active");
  Array.prototype.forEach.call(handles, (el, i) => {
    el.children[1].innerHTML = labels[i] + s1animals[i];
  });
  s1vals = e.detail.values;
}

setHandles({detail: {values: s1vals}});

// .$on() is a svelte component function
// https://svelte.dev/docs#$on
slider.$on('change', setHandles);

$btn.addEventListener("click", function () {
  $btn.innerText = "the values are: " + s1vals;
  setTimeout(() => {
    $btn.innerText = "Get Values";
  }, 1500);
})

// slider 2 bindings

// .$on() is a svelte component function
// https://svelte.dev/docs#$on
slider2.$on('change', function (e) {
  $s21.value = e.detail.values[0];
  $s22.value = e.detail.values[1];
  $s23.value = e.detail.values[0];
  $s24.value = e.detail.values[1];
});

// .set() is a svelte component function
// https://svelte.dev/docs#$set
$s21.addEventListener("change", (e) => {
  slider2.$set({values: [$s21.value, $s22.value]});
});

$s22.addEventListener("change", (e) => {
  slider2.$set({values: [$s21.value, $s22.value]});
});

$s23.addEventListener("change", (e) => {
  slider2.$set({values: [$s23.value, $s24.value]});
});

$s24.addEventListener("change", (e) => {
  slider2.$set({values: [$s23.value, $s24.value]});
});
