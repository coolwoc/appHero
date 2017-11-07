class HeroCreatorFormController {
    constructor($state, HeroService) {
        'ngInject';

        this.$state = $state;
        this.HeroService = HeroService;

        this.hero = {}
    }

    // form submission & reset from
    // once added, we will go to the next page

    addHero() {
        this.HeroService.createHero(this.hero);

        //reset the form
        this.hero = {};

        //go to home page
        this.$state.go('app.home');
    }
}

export default HeroCreatorFormController;
