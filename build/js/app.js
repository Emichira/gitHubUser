(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "0ee7b9d251a69cea4bcc7aab9042ca4c90a124f2";

},{}],2:[function(require,module,exports){
var apiKey = require('./../.env').apiKey;

repository = function() {

};

findthem = function(){

};

repository.prototype.getrepository = function(name,displayFunction){
  console.log(name);
  $.get('https://api.github.com/users/' + name + '?access_token=' + apiKey).then(function(response){
    displayFunction(response.name);
    console.log(response);
  }).fail(function(error) {
    console.log('error');
  });
};

findthem.prototype.getfindthem = function(repos,displayFunction){
  console.log(repos);
  $.get('https://api.github.com/users/' + repos + '/repos/?access_token=' + apiKey).then(function(response){
    displayFunction(response.repos);
    console.log(response);
  }).fail(function(error) {
    console.log('error');
  });
};

exports.repositoryModule = repository;
exports.findthemModule = findthem;

},{"./../.env":1}],3:[function(require,module,exports){
var repository = require('./../js/gitapi.js').repositoryModule;
var findthem = require('./../js/gitapi.js').findthemModule;

var displayFunction = function(name) {
  $('#showResults').text(name);
};


$(document).ready(function() {
  var currentrepositoryObject = new  repository();
  console.log('ready');
  $('#search').click(function(event) {
    event.preventDefault();
    console.log('clicked');
    var name = $('#text').val();
    $('#location').val("");
    currentrepositoryObject.getrepository(name, displayFunction);
  });
  var currentfindthemObject = new findthem();
  console.log('nice');
  $('#search').click(function(event) {
    event.preventDefault();
    console.log('clicked');
    var repos = $('#text').var();
    $('#location').val("");
    currentfindthemObject.getfindthem(repos, displayFunction);
  });
});

},{"./../js/gitapi.js":2}]},{},[3]);
