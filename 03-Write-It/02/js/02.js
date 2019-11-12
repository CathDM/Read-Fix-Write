const studioMovies = [
    'Martin Eden',
    'La Belle Époque',
    'DocuLatino Ghent - Minga',
    'Mijn Bijzonder Rare Week Met Tess',
    'The Mustang',
    'Joker',
    'La Ragazza Nella Nebbia',
    'Downton Abbey',
    'Parasite',
    'Once Upon a Time… in Hollywood',
    'Hors normes',
    'Everest: De Jonge Yeti',
    'Minuscule 2: Het Tropisch Avontuur',
    
  ];

  

  
  studioMovies.reverse();
document.write(`<ol>`);
for (let i = 0; i < studioMovies.length; i++) {
  document.write(`<li>${studioMovies[i]}</li>`);
}
document.write(`</ol>`);

