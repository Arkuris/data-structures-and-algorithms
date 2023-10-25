const { sortByYear, sortByTitle } = require('../index.js');

const movies = [
  {title: 'The Matrix', year: 1999, genres: ['Action', 'Sci-Fi']},
  {title: 'A Beautiful Mind', year: 2001, genres: ['Biography', 'Drama']},
  {title: 'An Inception', year: 2010, genres: ['Action', 'Adventure', 'Sci-Fi']},
  {title: 'Star Wars: Episode IV - A New Hope', year: 1977, genres: ['Action', 'Adventure', 'Fantasy']}
];

describe('Movie sorting functions', () => {
  test('sorts movies by year correctly', () => {
    const sortedMovies = sortByYear(movies);
    expect(sortedMovies[0].year).toBe(2010);
    expect(sortedMovies[1].year).toBe(2001);
  });

  test('sorts movies by title correctly', () => {
    const sortedMovies = sortByTitle(movies);
    expect(sortedMovies[0].title).toBe('A Beautiful Mind');
    expect(sortedMovies[1].title).toBe('An Inception');
  });
});

