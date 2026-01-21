/**
 
 * @class 
 */
export default class Team {
  /**
  
   */
  constructor() {
    this.members = new Set();
  }

  /**
   
   * @param {Character} character 
   * @throws {Error} 
   */
  add(character) {
    if (this.members.has(character)) {
      throw new Error('Персонаж уже есть в команде');
    }
    this.members.add(character);
  }

  /**
   
   * @param {...Character} characters
   */
  addAll(...characters) {
    characters.forEach((character) => {
      try {
        this.add(character);
      } catch (error) {
        
      }
    });
  }

  /**
   
   * @return {Array} 
   */
  toArray() {
    return Array.from(this.members);
  }
}