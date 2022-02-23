const colors = [
  'Red', 'OrangeRed',
  'Orange',
  'Yellow', 'LawnGreen',
  'LimeGreen', 'Teal',
  'Blue', 'Navy',
  'Indigo', 'Purple', 'Magenta'
]

var current_id = -1;

var animating = 0;
var animation;

var max_opacity = 0.5;
var min_opacity = 0.0;

var hidden = false;


var txt_title_start, txt_title_end, txt_colorname, txt_interval;
var btn_animate, btn_showall, btn_change, btn_hide;
var div_title_and_btn;
var layer_bg, layer_fg;
var input_interval;

// Returns the strip by ID
function get_strip_by_id(id) {
  return document.getElementById("strip_" + id);
}

function setup() {
  // Get documents elements
  txt_title_start = document.getElementById('txt_title_start');
  txt_title_end = document.getElementById('txt_title_end');
  txt_colorname = document.getElementById('txt_colorname');
  txt_interval = document.getElementById("txt_interval");
  btn_animate = document.getElementById("btn_animate");
  btn_showall = document.getElementById("btn_showall");
  btn_change = document.getElementById("btn_change");
  btn_hide = document.getElementById('btn_hide');
  div_title_and_btn = document.getElementById("div_title_and_btn");
  layer_bg = document.getElementById("layer_bg");
  layer_fg = document.getElementById("layer_fg");
  input_interval = document.getElementById("input_interval");

  // Hide elemetns
  btn_showall.setAttribute('disabled', 'disabled');

  // Set div_title_and_btn height dinamically with margin for animation
  div_title_and_btn.style.height = (parseInt(div_title_and_btn.offsetHeight) + 10) + "px";

  // Create and setup the strips
  for (let id = 0; id < colors.length; id++) {
    let current_strip = document.createElement("div");
    current_strip.setAttribute("id", "strip_" + id);
    current_strip.className = "strip";
    current_strip.style.background = colors[id];
    current_strip.style.width = (100 / colors.length) + "%";
    console.log("layer_bg: <"+ layer_bg + ">, current_strip: <" + current_strip + ">");
    layer_bg.appendChild(current_strip);
  }
}

function changeColor() {
  // Compute new color ID
  current_id = (current_id + 1) % colors.length;

  // Change title
  txt_colorname.innerHTML = colors[current_id];
  txt_colorname.hidden = false;
  txt_title_start.hidden = true;
  txt_title_end.hidden = true;

  // Color only strip with the current ID
  for (var id = 0; id < colors.length; id++) {
    let distance = Math.min(Math.abs(current_id - id), Math.abs(current_id + colors.length - id), Math.abs(current_id - colors.length - id)) - 1;
    if (distance == -1) {
      get_strip_by_id(id).style.opacity = 1.0;
      continue;
    }
    let max_distance = (colors.length / 2) - 1;
    let opacity = ((min_opacity - max_opacity) / max_distance) * distance + max_opacity;
    get_strip_by_id(id).style.opacity = opacity;
  }

}

function showAll() {
  // Reset current ID
  current_id = -1;

  // Change title
  txt_colorname.hidden = true;
  txt_title_start.hidden = false;
  txt_title_end.hidden = false;

  // Color every strip
  for (let id = 0; id < colors.length; id++) {
    get_strip_by_id(id).style.opacity = 1.0;
  }
}

function startAnimation() {
  animating = 1;
  let strips = document.getElementsByClassName('strip');
  for (let i = 0; i < strips.length; i++) {
    strips[i].style.transitionDuration = (getIntervalFromInput() / 1000) + "s";
  }
  animation = window.setInterval(changeColor, getIntervalFromInput());
  btn_animate.innerHTML = 'Stop animation';
}

function stopAnimation() {
  animating = 0;
  window.clearInterval(animation);
  btn_animate.innerHTML = 'Start animation';
}

function startStopAnimation() {
  if (animating === 0) {
    startAnimation();
  } else {
    stopAnimation();
  }
}

function intervalChanged() {
  if (animating === 1) {
    window.clearInterval(animation);
    startAnimation();
  }
}

function getIntervalFromInput() {
  let input_value;
  input_value = parseInt(input_interval.value);
  if (input_value < input_interval.min) {
    input_interval.value = input_interval.min;
    return parseInt(input_interval.min);
  } else if (input_value > input_interval.max) {
    input_interval.value = input_interval.max;
    return parseInt(input_interval.max);
  } else {
    return input_value;
  }
}

function onBtnClick(element) {
  switch (element) {
    case btn_change:
      btn_showall.removeAttribute('disabled');
      stopAnimation();
      changeColor();
      break;

    case btn_animate:
      btn_showall.removeAttribute('disabled');
      startStopAnimation();
      break;

    case btn_showall:
      btn_showall.setAttribute('disabled', 'disabled');
      stopAnimation();
      showAll();
      break;
      
    case btn_hide:
			hidden = !(hidden);
    	btn_change.hidden = hidden;
      btn_animate.hidden = hidden;
      btn_showall.hidden = hidden;
      txt_interval.hidden = hidden;
      input_interval.hidden = hidden;
      div_nameholder.style.opacity = (hidden) ? 0.3 : 1;
      btn_hide.innerHTML = (hidden) ? 'Unhide' : 'Hide';
      break;
  }
}
