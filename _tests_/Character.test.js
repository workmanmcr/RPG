import Character from '../src/Character';

describe("Character", () => {
  test('it should creat a character with core stats', () =>  {
    const character = new Character();
    expect(character.type).toBe('');
    expect(character.stats.int).toBe(0);
    expect(character.stats.comp).toBe(0);
    expect(character.stats.charm).toBe(0);
    expect(character.strength).toBe("");
    expect(character.score).toBe(0);
  });
  
});