import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import AppComponent from './app.component';

import NavigationComponent from './components/navigation/navigation';
import FooterComponent from './components/footer/footer';

import HomeComponent from './pages/home/home';
import CreateComponent from './pages/create/create';

// import app services
import HeroService from './service/heroService';

// import styles
import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.css';

// Custom style;
import './CSS/_custom.scss';

angular.module('app', [
    uiRouter,

    NavigationComponent.name,
    FooterComponent.name,
    HomeComponent.name,
    CreateComponent.name
])
.config(($locationProvider, $stateProvider, $urlRouterProvider) => {
    "ngInject";
    
    $locationProvider.html5Mode(true).hashPrefix('!');

    // Define app routing

    $stateProvider
        .state('app', {
            url: '/app',
            abstract: true,
            template: '<app></app>'
        })

        // Dashboard page
        .state('app.home', {
            url: '/home',
            template: '<home>,</home>'
        })

        // List Heroes
        .state('app.create', {
            url: '/create',
            template: '<create></create>'
        });

    // Default page
    $urlRouterProvider.otherwise('/app/home');
})

.component('app', AppComponent)
.factory('HeroService', HeroService);