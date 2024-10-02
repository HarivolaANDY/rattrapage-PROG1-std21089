function getMostPopularPlaces(places) {
    const placeCounts = places.reduce((acc, place) => {
      acc[place] = (acc[place] || 0) + 1;
      return acc;
    }, {});
  
    const sortedPlaces = Object.entries(placeCounts)
      .sort((a, b) => b[1] - a[1])
      .map(([place]) => place);
  
    return sortedPlaces.slice(0, 2).join(' ');
  }
