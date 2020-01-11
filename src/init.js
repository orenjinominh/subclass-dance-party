$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    dancer.$node.addClass(dancerMakerFunctionName);
    $('body').append(dancer.$node);
    window.dancers.push(dancer);

    $('.line-up').on('click', function(event) {
      dancer.$node.addClass('line-up');
      setTimeout(function() {
        dancer.$node.removeClass('line-up');
      }, 5000);
    });

    $('.dancer').mouseover(function() {
      dancer.$node.addClass('rotate');
      setTimeout(function() {
        dancer.$node.removeClass('rotate');
      }, 2000);
    });
    // on click,calculate closest dancer
    var findPair = function() {
      /* calculating position
      loop over the dancers and create a variable to hold its position
      use Math.floor to round down numbers
      compare each dancer's left position with one another and find pair with lowest diff.
            then add class 'find-pair' to bothdancers
      then remove class with setTimeout

      */
      for (let i = 0; i < window.dancers.length; i++) {

      }
    }
  });
});

