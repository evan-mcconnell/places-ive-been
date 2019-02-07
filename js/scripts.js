//buisness logic

function AllPlaces() {
  this.places = [],
  this.currentID = 0
}

AllPlaces.prototype.addPlace = function(place) {
  place.id = this.assignID();
  this.places.push(place);
}

AllPlaces.prototype.assignID = function() {
  this.currentID += 1;
  return this.currentID;
}

AllPlaces.prototype.findPlace = function(id) {
  for(var i=0; i<this.places.length; i++) {
    if (this.places[i]) {
      if (this.places[i].id === id) {
        return this.places[i];
      }
    }
  };
  return false;
}

AllPlaces.prototype.deletePlace = function(id) {
  for(var i=0; i<this.places.length; i++) {
    if (this.places[i]) {
      if (this.places[i].id === id) {
        delete this.places[i];
        return true;
      }
    }
  };
  return false;
}

function Place(city,country,stay,review) {
  this.city = city,
  this.country = country,
  this.stay = stay,
  this.review = review
}

Place.prototype.percentageOfLife = function (stay) {
  return stay / userLife * 100;
}

//UI logic
$(document).ready( function() {
  var allPlaces = new AllPlaces();
  $("#place-form").submit( function(event) {
    event.preventDefault();
    var inputtedCity = $("#city").val();
    var inputtedCountry = $("#country").val();
    var inputtedStay = $("#stay-length").val();
    var inputtedReview = $("#review").val();

    var newPlace = new Place(inputtedCity, inputtedCountry, inputtedStay, inputtedReview);
    allPlaces.addPlace(newPlace);





    console.log(newPlace);
    console.log(allPlaces);
    console.log(allPlaces.findPlace(2));
  });




});
