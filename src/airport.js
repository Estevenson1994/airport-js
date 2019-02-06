"use strict"

function Airport() {
  this._hanger = [];

}
Airport.prototype.land = function (plane) {
  plane.land();
  this._hanger.push(plane);
};


Airport.prototype.takeoff = function (plane) {
  this._hanger = this._hanger.filter(e => e !== plane);
  plane.takeOff();
  return plane;
};

Airport.prototype.isTakenOff = function (plane) {
  return  plane._isFlying();
//  if (this._hanger.includes(plane)) {
//    return false;
//  }
//  else {
//    return true;
//  }
};
