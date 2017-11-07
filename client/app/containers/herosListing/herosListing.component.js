import template from './herosListing.html';
import controller from './herosListing.controller';
import './herosListing.scss';

let herosListingComponent = {
    restrict: 'E',
    bindings: {},
    template,
    controller,
    controllerAs: 'vm'
};

export default herosListingComponent;
