function Plane() {
  this._isFlying = false
}

Plane.prototype.takeOff = function() {
  this._isFlying = true
}

Plane.prototype.land = function() {
  this._isFlying = false
}
