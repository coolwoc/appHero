class HerosListingController {
    constructor(HeroService) {
        'ngInject';

        // this will keep the service instace across our class
        this.HeroService = HeroService;

        // this will gold our heroList, it will pass other components
        this.herosList = [];
    }

    // This method will be called each time the component will be initialised,
    // In our case, it will be called for every page route change.
    $onInit() {
        this.herosList = this.HeroService.getHeroes();
    }
    
}

export default HerosListingController;
