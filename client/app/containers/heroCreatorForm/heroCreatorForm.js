import angular from 'angular';
import heroCreatorFormComponent from './heroCreatorForm.component';

let heroCreatorFormModule = angular.module('heroCreatorForm', [])

.component('heroCreatorForm', heroCreatorFormComponent)

export default heroCreatorFormModule;
