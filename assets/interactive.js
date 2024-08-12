// assets/interactive-testimonial.js
document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const testimonialBlocks = document.querySelectorAll('.testimonial-block');
  
    function hideAllBlocks() {
      testimonialBlocks.forEach(block => block.classList.remove('active'));
    }
  
    function showBlock(blockId) {
      const block = document.getElementById('block-' + blockId);
      if (block) {
        block.classList.add('active');
      }
    }
  
    tabButtons.forEach(button => {
      button.addEventListener('click', function() {
        hideAllBlocks();
        showBlock(button.getAttribute('data-block-id'));
      });
    });
  
    // Show the first block by default
    if (testimonialBlocks.length > 0) {
      testimonialBlocks[0].classList.add('active');
    }
  });
  