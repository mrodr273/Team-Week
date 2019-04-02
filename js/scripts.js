//Business Logic for AddressBook -----------
var eventBook = new EventBook();

function EventBook() {
  this.event = [];
}

EventBook.prototype.addEvent = function(info) {
  this.event.push(info);
}


//Business Logic for Creator Name --------------
function Creator(creatorName) {
  this.creatorName = creatorName;
}

//Business Logic for Events -------------
function Event(title, weight, min, max, where, when, time) {
  this.title  = title;
  this.weight = weight;
  this.min = min;
  this.max = max;
  this.where = where;
  this.when = when;
  this.time = time;
}

// function resetFields() {
//     $("input#firstName").val("");
//     $("input#lastName").val("");
//     $("input#phoneNumber").val("");
//     $("input.address-type").val("");
//     $("input.new-street").val("");
//     $("input.new-city").val("");
//     $("input.new-state").val("");
// }

// Address.prototype.fullAddress = function() {
//   return this.street + ", " + this.city + " " + this.state;
// }
//
// Contact.prototype.fullName = function() {
//   return this.firstName + " " + this.lastName;
// }

 // var newEvent = new Event(title, weight, min, max, where, when, time);

 var inputEvent = function(eventBook) {
   $("ul#eventDetails").text("");
   for (var index=0; index < eventBook.event.length; index++) {
     //debugger;
     $("ul#eventDetails").append("<li> " + eventBook.event[index].title + "</li>"); $("ul#eventDetails").append("<li> " + eventBook.event[index].weight + "</li>");
     $("ul#eventDetails").append("<li> " + eventBook.event[index].min + "</li>");
     $("ul#eventDetails").append("<li> " + eventBook.event[index].max + "</li>");
     $("ul#eventDetails").append("<li> " + eventBook.event[index].where + "</li>");
     $("ul#eventDetails").append("<li> " + eventBook.event[index].when + "</li>");
     $("ul#eventDetails").append("<li> " + eventBook.event[index].time + "</li>");
     // addressBook.contacts[index].addresses.forEach(function(address) {
     //   $("ul#eventDetails").append("<li>" + address.type + ": " + address.fullAddress() + "</li>");


   };
 };


//User Interface Logic -----------
$(document).ready(function() {
  $("#game").submit(function(event) {
    debugger;
  var creatortNameInput = $("input#name").val();
  var creatorTitleInput = $("input#title").val();
  var creatorWeightInput = $("input:radio[name=weight]:checked").val();
  var creatorMinInput = $("input#min").val();
  var creatorMaxInput = $("input#max").val();
  var creatorWhereInput = $("input:checkbox[name=where]:checked").val();
  var creatorWhenInput = $("#when").val();
  var creatorTimeInput = $("input:checkbox[name=time]:checked").val();

  var creatorEvent = new Event(creatorTitleInput, creatorWeightInput, creatorMinInput, creatorMaxInput, creatorWhereInput, creatorWhenInput, creatorTimeInput);
  eventBook.addEvent(creatorEvent);
// debugger;
console.log(eventBook);
  inputEvent(eventBook);
  //$("#eventDetails").show();
  // $(".new-address").each(function() {
  //   debugger;
  //   var addressType = $(this).find("select.address-type").val();
  //   var inputtedStreet = $(this).find("input.new-street").val();
  //   var inputtedCity = $(this).find("input.new-city").val();
  //   var inputtedState = $(this).find("input.new-state").val();
  //   var newAddress = new Address(addressType, inputtedStreet, inputtedCity, inputtedState);
  //   newContact.addresses.push(newAddress);
  // });
  //
  // resetFields();
  //
  // addressBook.addContact(newContact);
  // inputContact(addressBook);


  event.preventDefault();
  // });

  });
});
