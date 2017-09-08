const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
  const suffix = this.dataset.sizing || '';  //data-sizing="px"

  //style.setProperty() - 將CSS變數與值寫回:root裡
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
  // console.log(this.name);
  // console.log(this.value);
}

//input有change事件時，執行handleUpdate()
inputs.forEach(input => input.addEventListener('change', handleUpdate));

//input有mousemove事件時，執行handleUpdate()，此事件可有可無
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));


