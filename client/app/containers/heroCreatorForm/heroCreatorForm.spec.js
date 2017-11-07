import HeroCreatorFormModule from './heroCreatorForm'
import HeroCreatorFormController from './heroCreatorForm.controller';
import HeroCreatorFormComponent from './heroCreatorForm.component';
import HeroCreatorFormTemplate from './heroCreatorForm.html';

describe('HeroCreatorForm', () => {
  let $rootScope, makeController;

  beforeEach(window.module(HeroCreatorFormModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new HeroCreatorFormController();
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
      expect(HeroCreatorFormTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = HeroCreatorFormComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(HeroCreatorFormTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(HeroCreatorFormController);
      });
  });
});
