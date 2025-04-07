// Change the content of the text dynamically each time the button is clicked
let isTextChanged = false;
function changeText() {
  const dynamicTextElement = document.getElementById('dynamicText');
  if (!isTextChanged) {
    dynamicTextElement.textContent = "The text content has been changed!";
    isTextChanged = true;
  } else {
    dynamicTextElement.textContent = "This is a dynamically changing text!";
    isTextChanged = false;
  }
}

// Toggle the highlight class every time the button is clicked
let isHighlighted = false;
function toggleHighlight() {
  const dynamicTextElement = document.getElementById('dynamicText');
  if (!isHighlighted) {
    dynamicTextElement.classList.add('highlight');
    isHighlighted = true;
  } else {
    dynamicTextElement.classList.remove('highlight');
    isHighlighted = false;
  }
}

// Change the background color of the styleSection dynamically
function changeBackgroundColor() {
  const styleSection = document.getElementById('styleSection');
  const randomColor = getRandomColor();
  styleSection.style.backgroundColor = randomColor;
}

// Helper function to generate a random hex color
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Add an item to the list dynamically
function addItem() {
  const list = document.getElementById('itemList');
  const newItem = document.createElement('li');
  newItem.textContent = `Item ${list.children.length + 1}`;
  list.appendChild(newItem);
}

// Remove the last item from the list dynamically
function removeItem() {
  const list = document.getElementById('itemList');
  if (list.children.length > 0) {
    list.removeChild(list.lastChild);
  }
}
