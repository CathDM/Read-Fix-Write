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
const wrappedMovies = lowerCaseMovies.map(movie => wrapWithTag(movie, `li`));

document.write(wrapWithTag(wrappedMovies.join(``), `ol`));

//The elements will be separated by a specified separator. 
//The default separator is comma (,).The <ol> tag defines an ordered list. 
//An ordered list can be numerical or alphabetical.