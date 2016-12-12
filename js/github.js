// Wait for the document to be loaded

document.addEventListener("DOMContentLoaded", function(){
  // Now I am sure that the elements are findable

  var githubElement = document.querySelector("[data-js='github']");

  // https://api.github.com/search/users?q=jasonvanderslice
  // Create object for XHR/AJAX
  var xhr = new XMLHttpRequest();
  // SETUP what type of request and where it is going
  xhr.open("GET", "https://api.github.com/search/repositories?q=fall16-lecture");
  // SETUP listener for when it is done loading
  xhr.addEventListener("load", function(e){
    var responseJSON = JSON.parse(this.response);
    var headingHTML = "<h2>";
    headingHTML += responseJSON.items[4].full_name;
    headingHTML += "</h2>";
    githubElement.innerHTML = headingHTML;
  });
  // SEND request
  xhr.send();

});
