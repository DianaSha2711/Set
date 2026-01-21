import Team from '../src/js/Team.js';
import Character from '../src/js/Character.js';

describe('Team', () => {
  let team;
  let character1;
  let character2;
  let character3;

  beforeEach(() => {
    team = new Team();
    character1 = new Character('Лучник', 1, 'Bowman');
    character2 = new Character('Маг', 1, 'Magician');
    character3 = new Character('Воин', 1, 'Warrior');
  });

  test('should create an empty team', () => {
    expect(team.members).toBeInstanceOf(Set);
    expect(team.members.size).toBe(0);
  });

  test('should add a character to the team', () => {
    team.add(character1);
    expect(team.members.has(character1)).toBe(true);
    expect(team.members.size).toBe(1);
  });

  test('should throw error when adding duplicate character', () => {
    team.add(character1);
    expect(() => team.add(character1)).toThrow('Персонаж уже есть в команде');
    expect(team.members.size).toBe(1);
  });

  test('should allow adding different characters', () => {
    team.add(character1);
    team.add(character2);
    expect(team.members.size).toBe(2);
    expect(team.members.has(character1)).toBe(true);
    expect(team.members.has(character2)).toBe(true);
  });

  test('should add multiple characters', () => {
    team.addAll(character1, character2, character3);
    expect(team.members.size).toBe(3);
    expect(team.members.has(character1)).toBe(true);
    expect(team.members.has(character2)).toBe(true);
    expect(team.members.has(character3)).toBe(true);
  });

  test('should ignore duplicates when adding multiple characters', () => {
    team.addAll(character1, character2, character1, character3, character2);
    expect(team.members.size).toBe(3);
  });

  test('should work with empty arguments', () => {
    expect(() => team.addAll()).not.toThrow();
    expect(team.members.size).toBe(0);
  });

  test('should work when team already has some characters', () => {
    team.add(character1);
    team.addAll(character2, character3);
    expect(team.members.size).toBe(3);
  });

  test('should convert empty team to empty array', () => {
    const array = team.toArray();
    expect(array).toEqual([]);
    expect(Array.isArray(array)).toBe(true);
  });

  test('should convert team with members to array', () => {
    team.addAll(character1, character2, character3);
    const array = team.toArray();
    
    expect(array).toHaveLength(3);
    expect(array).toContain(character1);
    expect(array).toContain(character2);
    expect(array).toContain(character3);
    expect(Array.isArray(array)).toBe(true);
  });

  test('should return a new array each time', () => {
    team.add(character1);
    const array1 = team.toArray();
    const array2 = team.toArray();
    
    expect(array1).toEqual(array2);
    expect(array1).not.toBe(array2); 
  });

  test('should maintain uniqueness based on object reference', () => {
    
    const sameCharacterData = new Character('Лучник', 1, 'Bowman');
    
    team.add(character1);
    team.addAll(character2, sameCharacterData);
    
    expect(team.members.size).toBe(3); 
  });

  test('should handle mixed operations correctly', () => {
    
    team.add(character1);
    
    
    expect(() => team.add(character1)).toThrow();
    
    
    team.addAll(character2, character3, character1, character2);
    
    
    const array = team.toArray();
    
    
    expect(team.members.size).toBe(3);
    expect(array).toHaveLength(3);
    expect(array).toContain(character1);
    expect(array).toContain(character2);
    expect(array).toContain(character3);
  });
});

describe('Character', () => {
  test('should create a character with correct properties', () => {
    const character = new Character('Лучник', 1, 'Bowman');
    
    expect(character.name).toBe('Лучник');
    expect(character.level).toBe(1);
    expect(character.type).toBe('Bowman');
    expect(character.health).toBe(100);
  });

  test('should return correct info string', () => {
    const character = new Character('Маг', 5, 'Magician');
    
    expect(character.info).toBe('Маг (Magician) - уровень 5, здоровье 100');
  });
});