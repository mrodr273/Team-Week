//Business Logic for AddressBook -----------


function EventBook() {
  this.event = [];
}

var eventBook = new EventBook();

function playerEventBook() {
  this.playerEvent = [];
}

var PlayerEventBook = new playerEventBook();



EventBook.prototype.addEvent = function(info) {
  this.event.push(info);
}

playerEventBook.prototype.addPlayerEvent = function(x) {
  this.playerEvent.push(x);
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
function playerEvent(titlePlayer, weightPlayer, minPlayer, maxPlayer, wherePlayer, whenPlayer, timePlayer) {
  this.titlePlayer  = titlePlayer;
  this.weightPlayer = weightPlayer;
  this.minPlayer = minPlayer;
  this.maxPlayer = maxPlayer;
  this.wherePlayer = wherePlayer;
  this.whenPlayer = whenPlayer;
  this.timePlayer = timePlayer;
}
//Can break into 2 functions or leave as one
function resetFields() {
    $("input#name").val("");
    $("input#title").val("");
    $("input.weight").val("");
    $("input#min").val("");
    $("input#max").val("");
    $("input.where").val("");
    $("input#when").val("");
    $("input.time").val("");
    //Section for reseting player inputs
    //Add or delete inputs
    $("input#namePlayer").val("");
    $("input#titlePlayer").val("");
    $("input.weightPlayer").val("");
    $("input#minPlayer").val("");
    $("input#maxPlayer").val("");
    $("input.wherePlayer").val("");
    $("input#whenPlayer").val("");
    $("input.timePlayer").val("");
}

  //Might not need it for player unless we want to confirm inputs
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

 var inputPlayerEvent = function(PlayerEventBook) {
   $("ul#playerDetails").text("");
   for (var index=0; index < PlayerEventBook.playerEvent.length; index++) {
     //debugger;
     $("ul#playerDetails").append("<li> " + PlayerEventBook.playerEvent[index].titlePlayer + "</li>"); $("ul#eventDetails").append("<li> " + eventBook.event[index].weight + "</li>");
     $("ul#playerDetails").append("<li> " + PlayerEventBook.playerEvent[index].minPlayer + "</li>");
     $("ul#playerDetails").append("<li> " + PlayerEventBook.playerEvent[index].maxPlayer + "</li>");
     $("ul#playerDetails").append("<li> " + PlayerEventBook.playerEvent[index].wherePlayer + "</li>");
     $("ul#playertDetails").append("<li> " + PlayerEventBook.playerEvent[index].whenPlayer + "</li>");
     $("ul#playerDetails").append("<li> " + PlayerEventBook.playerEvent[index].time + "</li>");
     // addressBook.contacts[index].addresses.forEach(function(address) {
     //   $("ul#eventDetails").append("<li>" + address.type + ": " + address.fullAddress() + "</li>");


   };
 };


//User Interface Logic ----------
$(document).ready(function() {

  $("#playerbtn").click(function(event) {
    $("#player").show();
    $("#creator").hide();
  });

  $("#creatorbtn").click(function(event) {
    $("#creator").show();
    $("#player").hide();
  });

  //Form for Creator
  $("#game").submit(function(event) {
    // debugger;
  var creatortNameInput = $("input#name").val();
  var creatorTitleInput = $("input#title").val();
  var creatorWeightInput = $("input:radio[name=weight]:checked").val();
  var creatorMinInput = $("input#min").val();
  var creatorMaxInput = $("input#max").val();
  var creatorWhereInput = $("input:checkbox[name=where]:checked").val();
  var creatorWhenInput = $("#when").val();
  var creatorTimeInput = $("input:checkbox[name=time]:checked").val();

  var creatorEvent = new Event(creatorTitleInput, creatorWeightInput, creatorMinInput, creatorMaxInput, creatorWhereInput, creatorWhenInput, creatorTimeInput);
  console.log(creatorEvent);
  eventBook.addEvent(creatorEvent);
  inputEvent(eventBook);
  resetFields();

  event.preventDefault();
  });

  //Form for Player
  $("#gamePlayer").submit(function(event) {
    // debugger;
  var PlayerNameInput = $("input#namePlayer").val();
  var PlayerTitleInput = $("input#titlePlayer").val();
  var PlayerWeightInput = $("input:radio[name=weightPlayer]:checked").val();
  var PlayerMinInput = $("input#minPlayer").val();
  var PlayerMaxInput = $("input#maxPlayer").val();
  var PlayerWhereInput = $("input:checkbox[name=wherePlayer]:checked").val();
  var PlayerWhenInput = $("#whenPlayer").val();
  var PlayerTimeInput = $("input:checkbox[name=timePlayer]:checked").val();


  var newPlayerEvent = new playerEvent(PlayerTitleInput, PlayerWeightInput, PlayerMinInput, PlayerMaxInput, PlayerWhereInput, PlayerWhenInput, PlayerTimeInput);
  console.log(newPlayerEvent);
  PlayerEventBook.addPlayerEvent(newPlayerEvent);
  console.log(playerEventBook);
  // resetFields();
  inputPlayerEvent(newPlayerBook);

  event.preventDefault();
  });
});
