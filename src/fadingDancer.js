var MakeFadingDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('apple');
};

MakeFadingDancer.prototype = Object.create(MakeDancer.prototype);
MakeFadingDancer.prototype.constructor = MakeFadingDancer;

MakeFadingDancer.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
  this.$node.fadeToggle('slow');
};
