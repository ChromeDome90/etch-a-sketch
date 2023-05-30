"use strict"
// Non-changing variables
const DEFAULT_COLOR = '#CCDAD1'
const DEFAULT_MODE = 'color'
const DEFAULT_SIZE = 16

let currentColor = DEFAULT_COLOR
let currentMode = DEFAULT_MODE
let currentSize = DEFAULT_SIZE

// Function to change color of drawing
function setCurrentColor(newColor) {
    currentColor = newColor
}

// Function to change drawing mode
function setCurrentMode(newMode) {
    activateButton(newMode)
    currentMode = newMode
}

// Function to set a new grid size
function setCurrentSize(newSize) {
    currentSize = newSize
}

const colorPicker = document.getElementById('colorPicker')
const colorBtn = document.getElementById('colorBtn')
const rainbowBtn = document.getElementById('rainbowBtn')
const eraserBtn = document.getElementById('eraserBtn')
const sizeSlider = document.getElementById('sizeSlider')
const resetBtn = document.getElementById('resetBtn')
const grid = document.getElementById('grid')

colorPicker.oninput = (e) => setCurrentColor(e.target.value)


