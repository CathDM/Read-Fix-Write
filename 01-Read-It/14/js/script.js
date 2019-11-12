const theatres = [
  {
    number: 1,
    capacity: 250,
    occupied: 234,
  }, {
    number: 2,
    capacity: 250,
    occupied: 80,
  }, {
    number: 3,
    capacity: 150,
    occupied: 132,
  }, {
    number: 4,
    capacity: 100,
    occupied: 10,
  },
];

const calculateAvailable = theatre => {
  theatre.available = theatre.capacity -  theatre.occupied;
  return theatre;
};
//calculateAvailable 
//The reduce() method executes a provided function for each value of the array (from left-to-right).
//The return value of the function is stored in an accumulator (result/total).
console.log(`Theatres:`, theatres.length);
console.log(`Total capacity:`, theatres.reduce((total, theatre) => total + theatre.capacity, 0));
console.table(theatres.map(theatre => calculateAvailable(theatre)));
