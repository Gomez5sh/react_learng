//async - await

const getImg = async () => {

    try {
        const APIkey = 'p34IueDhJe9zKngQbcYriJWKztHZQ1pJ';
        const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${APIkey}`);
        const {
            data
        } = await resp.json();

        const {
            url
        } = data.images.original;

        const img = document.createElement('img');
        img.src = url;

        document.body.append(img);
    } catch (error) {
        // error
    }
};


getImg();