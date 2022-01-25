document.addEventListener('DOMContentLoaded', () => {
    // function: makes a new paragraph and appends to bottom of HTML body.
    function createParagraph() {
      const para = document.createElement('p');
      para.textContent = 'You clicked the button!';
      document.body.appendChild(para);
    }
    /*
    Get references to all buttons in an array.
    Loop over buttons and add a click event listener to each.
    */
    const buttons = document.querySelectorAll('button');

    for (const button of buttons) {
      button.addEventListener('click', createParagraph);
    }
  });
