import songs from '../data/songs.json';
import movies from '../data/movies.json';

const fetchUserData = async (userId: string) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const data = await response.json();
    if (Number(userId) % 2 === 0) {
        data.displayData = songs
    } else {
        data.displayData = movies
    }
    return data
};

export default fetchUserData;