function Airport() {
  this._hanger = [];

}
Airport.prototype.land = function (plane) {
  this._hanger.push(plane);
};


Airport.prototype.takeoff = function (plane) {
  this._hanger = this._hanger.filter(e => e !== plane);
};

Airport.prototype.takenoff = function (plane) {
  if (this._hanger.includes(plane)) {
    return false;
  }
  else {
    return true;
  }
};
