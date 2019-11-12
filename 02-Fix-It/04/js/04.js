const tvshows = [
  `legion`,
  `sneaky pete`,
  `santa clarita diet`,
  `riverdale`,
  `the young pope`,
  `a series of unfortunate events`,
  `taboo`,
  `colony`,
  `24: legacy`,
  `speechless`,
  `scherlock`,
  `stranger things`,
  `this is us`,
  `timeless`,
  `the oa`,
];

const wrapWithTag = (content, tagname) => `<${tagname}>${content}</${tagname}>`;


const createList = tvshows => {
  return `
    <ol>${tvshows
  
    .map(title => wrapWithTag(title, `li`))
    .join(``)}
    </ol>`;
};
document.write(createList(tvshows));
//document.write(`<ol>`);
//cant use this // tvshows.forEach(tvshow => wrapWithTag(tvshow));
//document.write(`</ol>`);
