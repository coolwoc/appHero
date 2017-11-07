import template from './heroListItem.html';
import controller from './heroListItem.controller';
import './heroListItem.scss';

const heroListItemComponent = {
    restrict: 'E',
    bindings: {
        hero: '<'
    },
    template,
    controller,
    controllerAs: 'vm'
};

export default heroListItemComponent;
