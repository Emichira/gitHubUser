var repository = require('./../js/gitapi.js').repositoryModule;
var findthem = require('./../js/gitapi.js').findthemModule;

var displayFunction = function(name) {
  $('#showResults').username(name);
};


$(document).ready(function() {
  var currentrepositoryObject = new  repository();
  console.log('ready');
  $('#search').click(function(event) {
    event.preventDefault();
    console.log('clicked');
    var name = $('#username').val();
    $('#location').val("");
    currentrepositoryObject.getrepository(name, displayFunction);
  });
  var currentfindthemObject = new findthem();
  console.log('nice');
  $('#search').click(function(event) {
    event.preventDefault();
    console.log('clicked');
    var repos = $('#username').var();
    $('#location').val("");
    currentfindthemObject.getfindthem(repos, displayFunction);
  });
});
