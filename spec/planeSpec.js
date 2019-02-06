describe('Plane', function() {

  var plane;

  beforeEach( function() {
     plane = new Plane();
  });

  it('is flying when taken off', function() {
    plane.takeOff();
    plane.land();
    plane.takeOff();
    expect(plane._isFlying).toEqual(true);
  });

  it('is not flying when landed', function() {
    plane.takeOff();
    plane.land();
    expect(plane._isFlying).toEqual(false);
  });

});
