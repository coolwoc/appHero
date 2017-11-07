import angular from 'angular';
import heroListItemComponent from './heroListItem.component';

const heroListItemModule = angular.module('heroListItem', [])
.component('heroListItem', heroListItemComponent)

export default heroListItemModule;
