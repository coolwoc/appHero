import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import <%= name %>Component from './<%= name %>.component';

const <%= name %>Module = angular.module('<%= name %>', [])

.component('<%= name %>', <%= name %>Component)

export default <%= name %>Module;
