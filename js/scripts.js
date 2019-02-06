//buisness logic
function Place(city,country,stay,review){
  this.city = city;
  this.country = country;
  this.stay = stay;
  this.review = review;
}

Place.prototype.percentageOfLife = function () {
  return stay / userLife * 100;
}


//UI logic
$(document).ready( function() {



});
