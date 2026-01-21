import Team from './Team.js';
import Character from './Character.js';


export default function demo() {
  const team = new Team();
  
  
  const character1 = new Character('Лучник', 1, 'Bowman');
  const character2 = new Character('Маг', 1, 'Magician');
  const character3 = new Character('Воин', 1, 'Warrior');
  const character4 = new Character('Демон', 1, 'Daemon');

  console.log('Демонстрация работы класса Team:');
  console.log('-------------------------------');
  
  
  try {
    team.add(character1);
    console.log('✓ Добавлен:', character1.info);
  } catch (error) {
    console.log('✗ Ошибка:', error.message);
  }

  
  try {
    team.add(character1);
    console.log('✓ Добавлен:', character1.info);
  } catch (error) {
    console.log('✗ Ошибка:', error.message);
  }

  
  team.addAll(character2, character3, character4, character2); // character2 будет добавлен только один раз
  console.log('✓ Добавлено несколько персонажей (дубли игнорируются)');

  
  console.log('Состав команды:');
  const teamArray = team.toArray();
  teamArray.forEach((char, index) => {
    console.log(`${index + 1}. ${char.info}`);
  });

  console.log('Размер команды:', team.members.size);
  console.log('Преобразовано в массив:', Array.isArray(teamArray));

  return team;
}