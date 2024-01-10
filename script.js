function Display(value) {
    document.getElementById('main-input').value += value;
  }

  function clearbox() {
    document.getElementById('main-input').value = '';
  }

  function backspace() {
    let currentValue = document.getElementById('main-input').value;
    document.getElementById('main-input').value = currentValue.slice(0, -1);
  }

  function calculate() {
    let final = document.getElementById('main-input').value;
    try {
      document.getElementById('main-input').value = eval(final);
    } catch (error) {
      document.getElementById('main-input').value = 'Error';
    }
  }