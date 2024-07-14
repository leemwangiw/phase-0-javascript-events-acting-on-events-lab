// Your code here
// Function to move the Dodger element to the left
function moveDodgerLeft() {
    const dodger = document.getElementById('dodger');
    let left = parseInt(dodger.style.left.replace('px', ''), 10);
    
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }
  
  // Function to move the Dodger element to the right
  function moveDodgerRight() {
    const dodger = document.getElementById('dodger');
    let left = parseInt(dodger.style.left.replace('px', ''), 10);
  
    if (left < 360) { // Assuming the container width is 400px and dodger width is 40px
      dodger.style.left = `${left + 1}px`;
    }
  }
  
  // Export functions if needed for testing in Node.js environment
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
      moveDodgerLeft,
      moveDodgerRight
    };
  }
  