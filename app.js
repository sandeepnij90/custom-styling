const inputs = document.querySelectorAll('input');

function handleUpdate() {
  const suffix = this.dataset.sizing;
  const html = document.querySelector('html');
  html.style.setProperty(`--${this.name}`,`${this.value}${suffix}`);
}

inputs.forEach( input=> {
  input.addEventListener('change',handleUpdate);
  input.addEventListener('mousemove',handleUpdate);
});
