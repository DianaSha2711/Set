/**
 
 * @memberof Team
 */
class Character {
  /**
   * @param {string} name 
   * @param {number} level 
   * @param {string} type 
   */
  constructor(name, level, type) {
    this.name = name;
    this.level = level;
    this.type = type;
    this.health = 100;
  }

  /**
   
   * @return {string}
   */
  get info() {
    return `${this.name} (${this.type}) - уровень ${this.level}, здоровье ${this.health}`;
  }
}

export default Character;