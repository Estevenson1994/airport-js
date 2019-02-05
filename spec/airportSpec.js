describe("Airport", function () {
  var airport = new Airport();

  plane = jasmine.createSpy('plane');

  it('lands a plane', function () {
    expect(airport.land(plane)).toEqual(plane);
  });
});