import Character from '../src/Character';

describe("Character", () => {
  test('it should create a character with core stats', () =>  {
    const character = new Character();
    expect(character.type).toBe('');
    expect(character.stats.int).toBe(0);
    expect(character.stats.comp).toBe(0);
    expect(character.stats.charm).toBe(0);
    expect(character.strength).toBe("");
    expect(character.score).toBe(0);
  });
  test("it should calculate score from boss pref stats and category without bonus", () => {
      const character = new Character();
      character.stats.int = 1;
      character.stats.comp = 1;
      character.stats.charm = 1;
      character.strength = "social";
      const stat = 'int';
      const bossPref = 3;
      const category = "easy";
      expect(character.calculateScore(stat, bossPref, category)).toBe(3);
  });

  test("it should calculate score from boss pref stats and category with bonus", () => {
    const character = new Character();
    character.stats.int = 1;
    character.stats.comp = 1;
    character.stats.charm = 1;
    character.strength = "social";
    const stat = 'int';
    const bossPref = 3;
    const category = "social";
    const hack = character.calculateScore(stat, bossPref, category).toString();
    expect(hack).toMatch(/[4-9]/);
});
 test ("it should calculate the score with bonus if the strength is equal to 'all' ", () => {
    const character = new Character();
    character.stats.int = 1;
    character.stats.comp = 1;
    character.stats.charm = 1;
    character.strength = "all";
    const stat = 'comp';
    const bossPref = 3;
    const category = "technical";
    const hack = character.calculateScore(stat, bossPref, category).toString();
    expect(hack).toMatch(/[4-9]/);
 })

});
