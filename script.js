// 1. Change text content dynamically
function changeText() {
    const dynamicText = document.getElementById("dynamicText");
    dynamicText.textContent = "The text content has been updated!";
  }
  
  // 2. Toggle a class to change style (e.g., highlight text)
  function toggleHighlight() {
    const textElement = document.getElementById("dynamicText");
    textElement.classList.toggle("highlight");
  }
  
  // 3. Change background color of a section
  function changeBackgroundColor() {
    const section = document.getElementById("styleSection");
    // Random color generator
    section.style.backgroundColor = getRandomColor();
  }
  
  // Helper function to generate random color
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  // 4. Add an item to the list
  function addItem() {
    const list = document.getElementById("itemList");
    const newItem = document.createElement("li");
    newItem.textContent = `Item ${list.children.length + 1}`;
    list.appendChild(newItem);
  }
  
  // 5. Remove the last item from the list
  function removeItem() {
    const list = document.getElementById("itemList");
    if (list.children.length > 0) {
      list.removeChild(list.lastElementChild);
    }
  }
  