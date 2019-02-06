describe('Plane', function() {

  beforeEach( function() {
    var plane = new Plane();
  });

  it('becomes beingFlying when it is taked off', function() {
    plane.takeoff
    expect(plane._isFlying).toEqual(true);
  });

  xit('stops beingFlying when it is landed', function() {
    plane.takeoff
    plane.land
    expect(plane._isFlying).toEqual(false);
  });

});
