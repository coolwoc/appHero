import HeroListItemModule from './heroListItem'
import HeroListItemController from './heroListItem.controller';
import HeroListItemComponent from './heroListItem.component';
import HeroListItemTemplate from './heroListItem.html';

describe('HeroListItem', () => {
  let $rootScope, makeController;

  beforeEach(window.module(HeroListItemModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new HeroListItemController();
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
      expect(HeroListItemTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = HeroListItemComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(HeroListItemTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(HeroListItemController);
      });
  });
});
