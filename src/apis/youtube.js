import axios from 'axios';
const KEY = 'AIzaSyC0JI6HmwLfDFrvWHMaSgD93pxp1Gk2mXM';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});