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

const startsWithThe = title => title.startsWith(`the`);

const createList = movies => {
  return `
    <ol>${movies
      .map(movie => movie.toLowerCase())
      .filter(startsWithThe)
      .map(movie => wrapWithTag(movie, `li`))
      .join(``)}
    </ol>`;
};
//The filter() method creates an array filled with all array elements that pass a test (provided as a function).
document.write(createList(movies));
