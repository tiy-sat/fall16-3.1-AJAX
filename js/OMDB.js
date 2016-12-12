// Main javascript

document.addEventListener("DOMContentLoaded", function(){
  // Anything inside of here can communicate with my document
  //   All of the elements can be found...

  // DOM Document Object Model

  // Find elements we will modify later:
  var moviesSectionElement = document.querySelector("[data-js='movies']");

  // Create instance of XHR object
  var xhr = new XMLHttpRequest();
  // Open a specific URL
  //   Requires TYPE of request and where it is going
  //   https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/setRequestHeader
  xhr.open("GET", "http://www.omdbapi.com/?s=the+matrix&y=&plot=short&r=json");
  // Listen for the "load event"
  //   The argument `e` is used in place of "event" as it is a keyword/reserved
  xhr.addEventListener("load", function(e){
    // `this` is equal to the XHR object. When we chain an "event" listener
    //   whatever we used the "dot syntax" on becomes our scope
    // `this.response` is actually just a STRING representation of the JSON we need
    var xhrData = this.response;
    // Type casting... basically we are changing the type to what need.
    //   We need to change the string to an Object... to use dot syntax
    //     or in other words... "make it usable"
    var JSONData = JSON.parse(xhrData);
    // Creating reference to array inside of results to perform a loop
    var searchArray = JSONData.Search;
    // Using `forEach` on the array to explicitly create functions at each item
    //  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
    searchArray.forEach(function(movieData){
      // String templating...
      //   OR "building HTML elements inside of JS" to reduce repetition (DRY)
      var movieArticleHTML = "<article>";
      movieArticleHTML += "<h2>";
      movieArticleHTML += movieData.Title;
      movieArticleHTML += "</h2>";
      movieArticleHTML += "<img src='";
      movieArticleHTML += movieData.Poster;
      movieArticleHTML += "'/>";
      movieArticleHTML += "</article>";
      // By using `.innerHTML` the DOM will RENDER our string as actualy HTML
      moviesSectionElement.innerHTML += movieArticleHTML;
    });
  });
  // Send the request
  xhr.send();

});
