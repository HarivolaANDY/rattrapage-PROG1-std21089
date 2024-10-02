function removeWords(original, wordsToRemove) {
    const words = original.split(' ');
    const filteredWords = words.filter(word => !wordsToRemove.includes(word));
    return filteredWords.join(' ');
  }
  