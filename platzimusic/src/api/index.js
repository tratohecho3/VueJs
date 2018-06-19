import config from './config';

const URL = `http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=spain&api_key=${config.apiKey}&format=json`;


export default function getArtists(){
    return fetch(URL)
        .then(res => res.json())
        .then(json => json.topartists.artist)
}