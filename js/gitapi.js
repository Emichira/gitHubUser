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
