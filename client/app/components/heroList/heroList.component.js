import template from './heroList.html';
import controller from './heroList.controller';
import './heroList.scss';

let heroListComponent = {
    restrict: 'E',
    bindings: {
        heros: '<'
    },
    template,
    controller,
    controllerAs: 'vm'
};

export default heroListComponent;
