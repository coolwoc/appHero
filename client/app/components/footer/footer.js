import angular from 'angular';
import footerComponent from './footer.component';

const footerModule = angular.module('footer', [])

.component('footer', footerComponent)

export default footerModule;
