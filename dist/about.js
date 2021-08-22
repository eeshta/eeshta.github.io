
import gsap from 'gsap'
import * as THREE from 'https://cdn.skypack.dev/three@0.126.1/build/three.module.js';

import * as dat from 'dat.gui'
import {OrbitControls} from 'https://cdn.skypack.dev/three@0.126.1/examples/jsm/controls/OrbitControls'


var i = 0;
var txt = 'Lorem ipsum typing effect!'; 
var speed = 50; 

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

