//promises

import getHeroById, {} from "../src/Bases/08-export";

/*const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const hero = getHeroById(2);
        resolve(hero);
        //reject('Owner not found')
    }, 2000);
})

promise.then((hero) => {
    console.log('Hero:', hero.name)
}).catch(err => console.warn(err))
*/

const getHeroByIdAsyn = (id) => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            const hero = getHeroById(id);
            if (hero !== undefined) {
                res(hero.name)
            } else {
                rej('Hero not found');
            }
        }, 3000);
    })
}

getHeroByIdAsyn(1)
    .then(console.log)
    .catch(console.warn);