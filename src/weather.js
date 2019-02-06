function Weather() {
};

Weather.prototype.isStormy = function() {
  var random = Math.floor(Math.random() * 10)
  if (random === 0) {
    return true
  }
  return false
};
