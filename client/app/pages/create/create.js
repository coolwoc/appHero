import angular from 'angular';
import createComponent from './create.component';
import HeroCreateForm from '../../containers/heroCreatorForm/heroCreatorForm';

const createModule = angular.module('create', [
    HeroCreateForm.name
])

.component('create', createComponent)

export default createModule;