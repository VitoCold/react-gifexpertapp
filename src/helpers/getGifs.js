export const getGifs = async (end_point, category, api_key) => {
    // console.log(end_point, category, api_key);
    const url = `https://${end_point}?q=${encodeURI(category)}&limit=10&api_key=${api_key}`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    // console.log(data);
    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });
    // console.log(gifs);
    return gifs;
}
