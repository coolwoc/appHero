import angular from 'angular';
import heroListComponent from './heroList.component';

import HeroListItemComponent from '../heroListItem/heroListItem';

let heroListModule = angular.module('heroList', [
    HeroListItemComponent.name
])

.component('heroList', heroListComponent)

export default heroListModule;
