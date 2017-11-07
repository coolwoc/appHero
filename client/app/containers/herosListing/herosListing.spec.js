import HerosListingModule from './herosListing'
import HerosListingController from './herosListing.controller';
import HerosListingComponent from './herosListing.component';
import HerosListingTemplate from './herosListing.html';

describe('HerosListing', () => {
  let $rootScope, makeController;

  beforeEach(window.module(HerosListingModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new HerosListingController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(HerosListingTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = HerosListingComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(HerosListingTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(HerosListingController);
      });
  });
});
