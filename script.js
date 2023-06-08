"use strict"
// Non-changing variables
const DEFAULT_COLOR = '#172121'
const DEFAULT_MODE = 'color'
const DEFAULT_SIZE = 16

let currentColor = DEFAULT_COLOR
let currentMode = DEFAULT_MODE
let currentSize = DEFAULT_SIZE

// Change color of drawing
function setCurrentColor(newColor) {
    currentColor = newColor
}

// Change drawing mode
function setCurrentMode(newMode) {
    activateButton(newMode)
    currentMode = newMode
}

// Set new grid size
function setCurrentSize(newSize) {
    currentSize = newSize
}

let showColor = document.getElementById('colorPicker')
const colorPicker = document.getElementById('colorPicker')
const colorBtn = document.getElementById('colorBtn')
const rainbowBtn = document.getElementById('rainbowBtn')
const eraserBtn = document.getElementById('eraserBtn')
const sizeSlider = document.getElementById('sizeSlider')
const resetBtn = document.getElementById('resetBtn')
const grid = document.getElementById('grid')

// Settings to change drawing style and erase canvas
colorPicker.oninput = (e) => setCurrentColor(e.target.value)
showColor.addEventListener('input', () => { showColor.style.backgroundColor = colorPicker.value })
colorBtn.onclick = () => setCurrentMode('color')
rainbowBtn.onclick = () => setCurrentMode('rainbow')
eraserBtn.onclick = () => setCurrentMode('eraser')
resetBtn.onclick = () => resetGrid()
sizeSlider.onmousemove = (e) => updateSizeValue(e.target.value)
sizeSlider.onchange = (e) => changeCanvasSize(e.target.value)

// Allows user to click and drag to draw
let mouseDown = false
grid.onmousedown = () => (mouseDown = true)
grid.onmouseup = () => (mouseDown = false)

function changeCanvasSize(value) {
    setCurrentSize(value)
    updateSizeValue(value)
    resetGrid()
}

function updateSizeValue(value) {
  sizeValue.innerHTML = `${value} x ${value}`
}

function resetGrid() {
    clearGrid()
    setupGrid(currentSize)
  }
  
function clearGrid() {
    grid.innerHTML = ''
  }
  
function setupGrid(size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`
  
    for (let i = 0; i < size * size; i++) {
      const gridElement = document.createElement('div')
      gridElement.classList.add('grid-element')
      gridElement.addEventListener('mouseover', changeColor)
      gridElement.addEventListener('mousedown', changeColor)
      grid.appendChild(gridElement)
    }
  }
  
function changeColor(e) {
    if (e.type === 'mouseover' && !mouseDown) return
    if (currentMode === 'rainbow') {
      const randomR = Math.floor(Math.random() * 256)
      const randomG = Math.floor(Math.random() * 256)
      const randomB = Math.floor(Math.random() * 256)
      e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
    } else if (currentMode === 'color') {
      e.target.style.backgroundColor = currentColor
    } else if (currentMode === 'eraser') {
      e.target.style.backgroundColor = '#CCDAD1'
    }
  }
  
function activateButton(newMode) {
    if (currentMode === 'rainbow') {
      rainbowBtn.classList.remove('active')
    } else if (currentMode === 'color') {
      colorBtn.classList.remove('active')
    } else if (currentMode === 'eraser') {
      eraserBtn.classList.remove('active')
    } 
  
    if (newMode === 'rainbow') {
      rainbowBtn.classList.add('active')
    } else if (newMode === 'color') {
      colorBtn.classList.add('active')
    } else if (newMode === 'eraser') {
      eraserBtn.classList.add('active')
    }
}
  
window.onload = () => {
    setupGrid(DEFAULT_SIZE)
    activateButton(DEFAULT_MODE)
}
