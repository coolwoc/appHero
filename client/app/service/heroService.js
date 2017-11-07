function HeroService() {
    'ngInject';

    // private variable to store Hero entries
    const heroes = [
        {
            name: 'Batman',
            age: 23,
            about: "Batman does not possess any superpowers; rather, he relies on his genius intellect, physical prowess, martial arts abilities, detective skills, science and technology, vast wealth, intimidation, and indomitable will. A large assortment of villains make up Batman's rogues gallery, including his archenemy, the Joker.",
            photo: 'http://via.placeholder.com/300x300'
        }
    ];

    return {
        
        // will retrieve our hero list
        getHeroes() {
            return heroes;
        },

        // creating a new hero
        createHero(hero) {

            const {name, age, about, photo} = hero;

            const tempHero = {
                name,
                age,
                about,
                photo
            };
            
            heroes.push(tempHero);
        }
    }
}
export default HeroService;