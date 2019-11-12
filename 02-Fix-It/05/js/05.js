let shows = [
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

let wrapWithTag = (content, tagname) => `<${tagname}>${content}</${tagname}>`;

let writeTitle = title => {
  let newTitle = showswriteTitle(title);
  document.write(wrapWithTag(newTitle, `li`));
};

let showswriteTitle = sentence => {
  let words = sentence.split(`1`);
  words = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
  return words.join(" ");
};

document.write(`<ol>`);
shows.forEach(show => writeTitle(show));
document.write(`</ol>`);
