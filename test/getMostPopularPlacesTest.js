const { getMostPopularPlaces } = require("../src/getMostPopularPlaces.js");
const { expect } = require('chai');

describe('getMostPopularPlaces', () => {
  it('should return the two most popular places', () => {
    const result = getMostPopularPlaces(['Analamahitsy', 'Analamahitsy', 'Itaosy', 'Behoririka', 'Itaosy', 'Itaosy']);
    expect(result).to.equal('Itaosy Analamahitsy');
  });

  it('should handle different cases', () => {
    const result = getMostPopularPlaces(['Antananarivo', 'Antananarivo', 'Tsimbazaza', 'Tsimbazaza', 'Tsimbazaza']);
    expect(result).to.equal('Tsimbazaza Antananarivo');
  });

  it('should handle empty array', () => {
    const result = getMostPopularPlaces([]);
    expect(result).to.be.undefined;
  });
});
