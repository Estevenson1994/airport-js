function Plane() {
  this._isFlying = false
}

Plane.prototype.land = function() {
  this._isFlying = true
}
