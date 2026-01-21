import demo from './js/app.js';

document.addEventListener('DOMContentLoaded', () => {
  const output = document.getElementById('output');
  const team = demo();
  
  const teamArray = team.toArray();
  const teamInfo = teamArray.map(char => `<li>${char.info}</li>`).join('');
  
  output.innerHTML = `
    <h2>Состав команды (${team.members.size} персонажей):</h2>
    <ul>${teamInfo}</ul>
    <p>Все персонажи уникальны, дубли не допускаются.</p>
  `;
});