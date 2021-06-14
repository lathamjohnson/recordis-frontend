import React, { useEffect, useState} from 'react';
import './App.css';
import { Route, useHistory } from 'react-router-dom';
import Login from './components/Login'
import Welcome from './components/Welcome';
import Home from './components/Home';
import Nav from './components/Nav';
import Results from './components/Results';


function App() {
  const history = useHistory()
  const [spotifyAuth, setSpotifyAuth] = useState(false)
  const [artistPool, setArtistPool] = useState([])
  const [search, setSearch] = useState('')
  const [albums, setAlbums] = useState([])
  const [user, setUser] = useState(null)
  const handleChange = (e) => {setSearch(e.target.value)}

  useEffect(() => {
    fetch("http://localhost:8000/user")
    .then(res => res.json())
    .then(data => setUser(data))
  }, [])

  async function getArtists(string){
    fetch(`http://localhost:8000/artist/${string}/`)
      .then(res => res.json())
      .then(data => data.Artists)
      .then(arr => {return arr})
  }

  async function getAlbums(artists){
    const albumArr = []
    artists.forEach(async (id) => {
      const albums = await fetch(`http://localhost:8000/album/${id}/`)
      if(!albums.ok){return}
      const data = await albums.json()
      data.Results.forEach((a) => {
        if(!albumArr.some(function(o){return o['name'] === a.name}) && albumArr.length <= 400){
          albumArr.push(a)
        }
      })
    })
    return albumArr
  }
  
  async function handleSearch(e){
    e.preventDefault()
    const artists = await getArtists(e.target.firstElementChild.value)
    const albums = await getAlbums(artists)
    console.log(artists)
    console.log(albums)
    if(albums && artists){
      setArtistPool(artists)
      setAlbums(albums)
    }
    // history.push('/results')
  }

  function authenticateSpotify(){
      fetch("http://localhost:8000/is-authenticated")
            .then((res) => res.json())
            .then((data) => {
              setSpotifyAuth(data.status);
              if (!data.status) {
                fetch("http://localhost:8000/get-auth")
                  .then((res) => res.json())
                  .then((data) => {
                    window.location.replace(data.url);
                  });
              }
            });
  }

  return (  
    <div className="App">
      <Nav user={user}/>
      <Route exact path="/" render={routerProps => <Welcome authenticateSpotify={authenticateSpotify}/>}/>
      <Route exact path="/home" render={routerProps => <Home handleChange={handleChange} handleSearch={handleSearch}/>}/>
      <Route exact path="/results" render={routerProps => <Results albums={albums}/>}/>
    </div>
  );
}

export default App;
