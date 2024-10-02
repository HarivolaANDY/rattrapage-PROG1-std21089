const { removeWords } = require("../src/removeWords.js");
const { expect } = require('chai');
  
describe('removeWords', () => {
    it('should remove specified words from a string', () => {
      const result = removeWords('Hello, ceci est un test', ['ceci', 'un']);
      expect(result).to.equal('Hello, est test');
    });
  
    it('should be case sensitive', () => {
      const result = removeWords('Hello Java', ['java']);
      expect(result).to.equal('Hello Java');
    });
  
    it('should handle empty arrays of words to remove', () => {
      const result = removeWords('Hello, world', []);
      expect(result).to.equal('Hello, world');
    });
  });
