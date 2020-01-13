$(document).ready(function () {
  window.dancers = [];

  $('.addDancerButton').on('click', function (event) {

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

    $('.line-up').on('click', function (event) {
      dancer.$node.addClass('line-up');
      setTimeout(function () {
        dancer.$node.removeClass('line-up');
      }, 5000);
    });

    $('.dancer').mouseover(function () {
      dancer.$node.addClass('rotate');
      setTimeout(function () {
        dancer.$node.removeClass('rotate');
      }, 2000);
    });


    var firstDancerCoordinates;
    var firstDancer;

    $('.dancer').on('click', function (event) {
      firstDancer = dancer.$node.addClass('dancer1');
      firstDancerCoordinates = [parseFloat(event.target.style.top), parseFloat(event.target.style.left)];
      var closestDancerResult = findPair();

      var makePairDance = function(firstDancer, closestDancerResult) {
        if (dancer.$node.hasClass('dancer1')) {
          dancer.$node.addClass('slow-dance');
        }
        setTimeout(function () {
          firstDancer.$node.removeClass('slow-dance');
          closestDancerResult.$node.removeClass('slow-dance');
        }, 10000);
      };

      makePairDance(firstDancer, closestDancerResult);
    });

    var findPair = function () {

      var calculateDistance = function(firstDancerArray, top2, left2) {
        var length1 = top2 - firstDancerCoordinates[0];
        var length2 = left2 - firstDancerCoordinates[1];
        var distance = Math.sqrt(Math.pow(length1, 2) + Math.pow(length2, 2));
        return distance;
      };

      var smallestDistance = 10000;
      var closestDancer = window.dancers[0];

      for (var i = 0; i < window.dancers.length; i++) {
        var distance = calculateDistance(firstDancerCoordinates, window.dancers[i].top, window.dancers[i].left);
        if (distance < smallestDistance && distance !== 0) {
          smallestDistance = distance;
          closestDancer = window.dancers[i];
        }
      }

      closestDancer.$node.addClass('slow-dance');
      return closestDancer;

    };

  });
});

