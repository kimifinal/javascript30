const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
  const spacing = document.querySelector('#spacing').value
  const blur = document.querySelector('#blur').value
  const base = document.querySelector('#base').value

  console.log('spacing:' + spacing);
  console.log('blur:' + blur);
  console.log('base:' + base);

  document.documentElement.style.setProperty(`--${this.name}`, spacing);
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));


