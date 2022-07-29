import data from './data.json';

function generateBars(parentNode) {
  const amount = [];
  for (let i = 0; i < data.length; i += 1) {
    amount.push(Number(data[i].amount));
  }
  for (let i = 0; i < data.length; i += 1) {
    const container = document.createElement('div');
    container.id = data[i].day;
    const bar = document.createElement('div');
    bar.classList.add('bar');
    const barFill = document.createElement('div');
    barFill.classList.add('bar-fill');
    barFill.setAttribute(['data-amount'], `$${data[i].amount}`);
    const percentage = Math.floor((amount[i] / Math.max(...amount)) * 100);
    barFill.style.height = `${percentage}%`;
    if (percentage === 100) { barFill.style.backgroundColor = 'hsl(186, 34%, 60%)'; }
    bar.appendChild(barFill);
    container.appendChild(bar);
    const dayName = document.createElement('div');
    dayName.classList.add('day-name');
    dayName.textContent = data[i].day;
    container.appendChild(dayName);
    parentNode.appendChild(container);
  }
}

export default generateBars;
