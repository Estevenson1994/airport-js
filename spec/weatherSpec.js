describe('Weather', function() {

  var weather;  

  beforeEach(function() {
    weather = new Weather();
  });

  describe('isStormy', function() {
    it('should be type boolean', function() {
      expect(weather.isStormy).toMatch(/true|false/)
    });
  });
});
