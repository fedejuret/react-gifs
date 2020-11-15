export const getGifs = async (category) => {

    const url = 'https://api.giphy.com/v1/gifs/search?';
    const api_key = 'VhQxznXbUx0YcVe88EpfpPVUdo5XfD0P';
    const search = encodeURI(category);
    const limit = 8;

    const fullUrl = url + 'q=' + search + '&limit=' + limit + '&api_key=' + api_key;

    const resp = await fetch(fullUrl);
    const { data } = await resp.json();

    const gifs = data.map(img => {

        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });

    return gifs;

}