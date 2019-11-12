const tvShows = [
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

tvShows.reverse();
document.write(`<ol>`);
for (let i = 0; i < tvShows.length; i++) {
  document.write(`<li>${tvShows[i]}</li>`);
}
document.write(`</ol>`);
