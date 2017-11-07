import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import homeComponent from './home.component';
import HerosListingComponent from '../../containers/herosListing/herosListing';

let homeModule = angular.module('home', [
    uiRouter,
    
    HerosListingComponent.name
])

.component('home', homeComponent)

export default homeModule;
