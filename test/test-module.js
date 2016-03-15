describe('Module', function () {

  //==============//
  // INITIALIZING //
  //==============//

  beforeEach(module('betsol.skypeName'));

  var serviceProvider;
  beforeEach(module(function (_serviceProvider_) {
    serviceProvider = _serviceProvider_;
  }));

  var service;
  beforeEach(inject(function (_service_) {
    service = _service_;
  }));


  //=========//
  // TESTING //
  //=========//

  it('service provider should be present', function () {
    expect(serviceProvider).to.be.an('object');
  });

  it('service should be present', function () {
    expect(service).to.be.an('object');
  });

});
