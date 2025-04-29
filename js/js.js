const phoneForm = document.getElementById('phone-form');
const puzzleArea = document.getElementById('puzzle-area');
const resetButton = document.getElementById('reset-button');

let digitsEntered = 0;
const totalDigits = 10;

createInput();

resetButton.addEventListener('click', (e) => {
  e.preventDefault();
  resetForm();
});

function createInput() {
  if (digitsEntered >= totalDigits) {
    addSubmitButton();
    return;
  }

  const inputBox = document.createElement('div');
  inputBox.className = 'input-box';

  const input = document.createElement('input');
  input.type = 'text';
  input.maxLength = 1;

  inputBox.appendChild(input);
  phoneForm.appendChild(inputBox);

  input.focus();

  input.addEventListener('input', () => {
    if (!/^[0-9]$/.test(input.value)) {
      input.value = '';
      return;
    }

    input.disabled = true;
    digitsEntered++;

    if (digitsEntered === 3 || digitsEntered === 6) {
      const dash = document.createElement('div');
      dash.className = 'dash';
      dash.innerText = '-';
      phoneForm.appendChild(dash);
    }

    if (digitsEntered < totalDigits) {
      showPuzzle();
    } else {
      addSubmitButton();
    }
  });
}

function addSubmitButton() {
  const submitButton = document.createElement('button');
  submitButton.type = 'button';
  submitButton.innerText = 'Submit Number';
  submitButton.className = 'submit-button';
  phoneForm.appendChild(submitButton);

  submitButton.addEventListener('click', () => {
    showSuccessPopup();
  });
}

function showPuzzle() {
  puzzleArea.style.display = 'block';
  puzzleArea.innerHTML = '';

  const puzzleType = Math.floor(Math.random() * 3);

  if (puzzleType === 0) {

    const message = document.createElement('div');
    message.innerText = 'Click the circle to continue:';
    puzzleArea.appendChild(message);

    const circle = document.createElement('div');
    circle.style.width = '50px';
    circle.style.height = '50px';
    circle.style.background = 'blue';
    circle.style.borderRadius = '50%';
    circle.style.margin = '20px auto';
    circle.style.cursor = 'pointer';
    puzzleArea.appendChild(circle);

    circle.addEventListener('click', completePuzzle);

  } else if (puzzleType === 1) {
    const num1 = Math.floor(Math.random() * 5) + 1;
    const num2 = Math.floor(Math.random() * 5) + 1;

    const message = document.createElement('div');
    message.innerText = `What is ${num1} + ${num2}?`;
    puzzleArea.appendChild(message);

    const answerInput = document.createElement('input');
    answerInput.type = 'text';
    answerInput.style.marginTop = '10px';
    puzzleArea.appendChild(answerInput);

    answerInput.addEventListener('input', () => {
      if (parseInt(answerInput.value) === num1 + num2) {
        completePuzzle();
      }
    });

  } else {
    const target = Math.floor(Math.random() * 10);
    const message = document.createElement('div');
    message.innerText = `Click the number ${target}:`;
    puzzleArea.appendChild(message);

    const options = [];
    options.push(target);

    while (options.length < 5) {
      const randomNum = Math.floor(Math.random() * 10);
      options.push(randomNum);
    }

    shuffle(options);

    options.forEach(number => {
      const button = document.createElement('button');
      button.innerText = number;
      button.className = 'puzzle-option';
      puzzleArea.appendChild(button);

      button.addEventListener('click', () => {
        if (number === target) {
          completePuzzle();
        }
      });
    });
  }
}


function completePuzzle() {
  puzzleArea.style.display = 'none';
  createInput();
}

function showSuccessPopup() {
  const popup = document.createElement('div');
  popup.id = 'success-popup';
  popup.innerHTML = `
    <h1>Congratulations!</h1>
    <p>You have completed this annoying phone number form.</p>
    <button id="restart-button">Restart</button>
  `;
  document.body.appendChild(popup);

  popup.style.position = 'fixed';
  popup.style.top = '0';
  popup.style.left = '0';
  popup.style.width = '100%';
  popup.style.height = '100%';
  popup.style.background = 'white';
  popup.style.zIndex = '5000';
  popup.style.display = 'flex';
  popup.style.flexDirection = 'column';
  popup.style.alignItems = 'center';
  popup.style.justifyContent = 'center';
  popup.style.fontSize = '2rem';

  document.getElementById('restart-button').addEventListener('click', () => {
    popup.remove();
    resetForm();
  });
}

function resetForm() {
  phoneForm.innerHTML = '';
  digitsEntered = 0;
  createInput();
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
