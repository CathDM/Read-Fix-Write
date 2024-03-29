const movies = [
  `The Godfather`,
  `The Shawshank Redemption`,
  `Schindler's List`,
  `Raging Bull`,
  `Casablanca`,
  `Citizen Kane`,
  `Gone with the Wind`,
  `The Wizard of Oz`,
  `One Flew Over the Cuckoo's Nest`,
  `Lawrence of Arabia`,
];

const wrapWithTag = (content, tagname) => `<${tagname}>${content}</${tagname}>`;

const lowerCaseMovies = movies.map(movie => movie.toLowerCase());
//The map() method creates a new array with the results of calling a function for every array element.
document.write(`<ol>`);
lowerCaseMovies.forEach(movie => document.write(wrapWithTag(movie, `li`)));
document.write(`</ol>`);
