// FESH API

const APIkey = 'p34IueDhJe9zKngQbcYriJWKztHZQ1pJ';


const HTTPCall = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${APIkey}`);

HTTPCall
    .then(resp => resp.json())
    .then(({
        data
    }) => {
        const {
            url
        } = data.images.original;

        const img = document.createElement('img');
        img.src = url;

        document.body.append(img)
    })
    .catch(console.warn);