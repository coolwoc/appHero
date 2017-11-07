import angular from 'angular';
import herosListingComponent from './herosListing.component';

import HeroList from '../../components/heroList/heroList';

const herosListingModule = angular.module('herosListing', [
    HeroList.name
])

.component('herosListing', herosListingComponent)

export default herosListingModule;
