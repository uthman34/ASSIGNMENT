const express = require('express');
const app = express();
const port = 3000;
const cors= require('cors');
app.use(cors({
    origin:'http://localhost:5173'
}));

const music =[
    {
        musicName: 'Shape of You',
        artist: 'Ed Sheeran',
        album: 'Divide',
        releaseDate: '2017-01-06'
    },
    {
        musicName: 'Blinding Lights',
        artist: 'The Weeknd',
        album: 'After Hours',
        releaseDate: '2020-03-20'
    },
    {
        musicName: 'Uptown Funk',
        artist: 'Mark Ronson ft. Bruno Mars',
        album: 'Uptown Special',
        releaseDate: '2014-11-10'
    },
    {
        musicName: 'Rolling in the Deep',
        artist: 'Adele',
        album: '21',
        releaseDate: '2010-11-29'   
    },
    {
        musicName: 'Happy',
        artist: 'Pharrell Williams',
        album: 'G I R L',
        releaseDate: '2013-11-21'
    },
    {
        musicName: 'Bohemian Rhapsody',
        artist: 'Queen',
        album: 'A Night at the Opera',
        releaseDate: '1975-10-31'
    },
    {
        musicName: 'Smells Like Teen Spirit',
        artist: 'Nirvana',
        album: 'Nevermind',
        releaseDate: '1991-09-10'
    },
    {
        musicName: 'Billie Jean',
        artist: 'Michael Jackson',
        album: 'Thriller',
        releaseDate: '1982-11-30'
    },
    {
        musicName: 'Hey Jude',
        artist: 'The Beatles',
        album: 'Hey Jude',
        releaseDate: '1968-08-26'
    }


]

app.get('/music', (req ,res) =>{
    res.send(music)
    console.log(music);
    
})
app.listen(port,()=>{
    console.log(music);
    
})
