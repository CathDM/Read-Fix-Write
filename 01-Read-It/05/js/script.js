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

const wrapWithTag = (content, tagname) => {
  return `<${tagname}>${content}</${tagname}>`;
};
//The tagName read-only property of the Element interface returns the tag name of the element on which it's called
const parseTitle = title => {
  const lowerTitle = title.toLowerCase();
  const wrapped = wrapWithTag(lowerTitle, `li`);
  document.write(wrapped);
};
//The wrap() method wraps specified HTML element(s) around each selected element.
//parseTitle (JSON method)is a string that returns the object in this case transforms the value to lowercase
document.write(`<ol>`);
movies.forEach(movie => parseTitle(movie));
document.write(`</ol>`);
