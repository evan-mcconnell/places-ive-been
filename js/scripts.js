//buisness logic

function AllPlaces() {
  this.places = [],
  this.currentID = 0
}

AllPlaces.prototype.addPlace = function(place) {
  this.places.push(place);
}

AllPlaces.prototype.assignID = function() {
  this.currentID ++;
  return this.currentID;
}

function Place(city,country,stay,review) {
  this.city = city,
  this.country = country,
  this.stay = stay,
  this.review = review,
}

Place.prototype.percentageOfLife = function (stay) {
  return stay / userLife * 100;
}


//UI logic
$(document).ready( function() {
  $("#place-form").submit( function(event) {
    event.preventDefault();
    var inputtedCity = $("#city").val();
    var inputtedCountry = $("#country").val();
    var inputtedStay = $("#stay-length").val();
    var inputtedReview = $("#review").val();
  });
  




});
