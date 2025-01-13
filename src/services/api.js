
// move to a .env file
const API_KEY = "41fe9f54603bcb64623460e6b5df81d2"
const BASE_URL = "https://api.themoviedb.org/3"

// async for query that takes some amount of time
export const getPopularMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results;
};

export const searchMovies = async (query) => {
    const response = await fetch(
        `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
            query
        )}`
    );
    const data = await response.json()
    return data.results
};