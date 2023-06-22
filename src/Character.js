
export default class Character {
    constructor() { 
      this.type = '';
      this.stats = {int: 0, comp: 0, charm: 0,};
      this.strength = '';
      this.score = 0;
    }

    calculateScore(stat, bossPref, category) {
        let score = this.stats[stat] * bossPref;
        if (category === this.strength) {
            let bonus = Math.floor(Math.random() * 6) + 1;
            return score + bonus
        }
        return score;
    }
  }

//character option: 
// 1. The 9-to-5er int=7 comp=5 charm=2 (stronger with long repetitive tasks)
// 2. The Intern int=5 comp=3 charm=6 (stronger with easier tasks)
// 3. The Brown-noser int=5 comp=4 charm=8 (stronger at social tasks)
// 4. The IT-guy int=8 comp=5 charm=3 (stronger at technical tasks)
// 5. The workaholic int=4 comp=8 charm=3 (stronger at all task types) 

/* 
- type: ''
- stats: int, comp, cha
- strength
- score
*/