var repository = require('./../js/gitapi.js').repositoryModule;
var findthem = require('./../js/gitapi.js').findthemModule;

var displayFunction = function(name) {
  $('#showResults').text(name);
};


$(document).ready(function() {
  var currentrepositoryObject = new  repository();
  console.log('ready');
  $('#what').click(function(event) {
    event.preventDefault();
    console.log('clicked');
    var name = $('#yeah').val();
    $('#location').val("");
    currentrepositoryObject.getrepository(name, displayFunction);
  });
  var currentfindthemObject = new findthem();
  console.log('nice');
  $('#what').click(function(event) {
    event.preventDefault();
    console.log('clicked');
    var repos = $('#yeah').var();
    $('#location').val("");
    currentfindthemObject.getfindthem(repos, displayFunction);
  });
});
