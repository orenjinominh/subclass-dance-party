var MakeGrowingDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('apple');
};

MakeGrowingDancer.prototype = Object.create(MakeDancer.prototype);
MakeGrowingDancer.prototype.constructor = MakeGrowingDancer;

MakeGrowingDancer.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
  this.$node.animate({
    top: top * 2
  });
};
