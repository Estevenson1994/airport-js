describe("Airport", function () {

//  var airport;

  beforeEach(function () {
    airport = new Airport();
  });

  plane = jasmine.createSpy('plane');

  it('lands a plane', function () {
    airport.land(plane)
    expect(airport._hanger).toContain(plane);
  });

  it('plane takes off', function () {
    airport.land(plane)
    airport.takeoff(plane);
    expect(airport._hanger).not.toContain(plane);
  });

  it('confirm plane has taken off', function () {
    airport.land(plane);
    airport.takeoff(plane);
    expect(airport.isTakenOff(plane)).toEqual(true);
  });
});
