import data from './data.json';

function generateBars(parentNode) {
  for (let i = 0; i < data.length; i += 1) {
    const container = document.createElement('div');
    container.id = data[i].day;
    const bar = document.createElement('div');
    bar.classList.add('bar');
    const barFill = document.createElement('div');
    barFill.classList.add('bar-fill');
    bar.appendChild(barFill);
    container.appendChild(bar);
    const dayName = document.createElement('div');
    dayName.classList.add('day-name');
    dayName.textContent = data[i].day;
    container.appendChild(dayName);
    parentNode.appendChild(container);
  }
}
generateBars(document.querySelector('#bars'));
export default generateBars;
