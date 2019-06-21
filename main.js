var button = document.getElementsByTagName('button')[0];
var myHeading = document.getElementsByTagName('h1')[0];
var result = document.getElementById('result');
var resturantResult = document.getElementById('random-result')


var restaurantList = [
  'The Salty Pig',
  'Parish Cafe and Bar',
  'Milkweed',
  'Carmelina’s',
  'Saltie Girl',
  'Bostonia Public House',
  'The Friendly Toast',
  'Mike & Patty’s',
  'The Tip Tap Room',
  'Toro',
  'Blunch',
  'Citrus & Salt',
  'Dig Inn',
  'Row 34',
  'Luke’s Lobster Back Bay',
];
restaurantList.sort(function(a, b){return 0.5 - Math.random()});

var myFunction = function(){
  resturantResult.innerHTML = restaurantList[0];
  result.classList.toggle('hidden');
};

button.onclick = myFunction;
