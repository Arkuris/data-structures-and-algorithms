function sortByYear(movies) {
  return movies.sort((a, b) => b.year - a.year);
}

function ignoreLeadingWords(title) {
  const ignoredWords = ['A ', 'An ', 'The '];
  for (let word of ignoredWords) {
    if (title.startsWith(word)) {
      return title.slice(word.length);
    }
  }
  return title;
}

function sortByTitle(movies) {
  return movies.sort((a, b) => {
    const titleA = ignoreLeadingWords(a.title);
    const titleB = ignoreLeadingWords(b.title);
    return titleA.localeCompare(titleB);
  });
}

const movies = [
  {title: 'The Matrix', year: 1999, genres: ['Action', 'Sci-Fi']},
  {title: 'A Beautiful Mind', year: 2001, genres: ['Biography', 'Drama']},
  {title: 'An Inception', year: 2010, genres: ['Action', 'Adventure', 'Sci-Fi']},
  {title: 'Star Wars: Episode IV - A New Hope', year: 1977, genres: ['Action', 'Adventure', 'Fantasy']}
];

console.log(sortByYear(movies));
console.log(sortByTitle(movies));

module.exports = { sortByYear, sortByTitle };
