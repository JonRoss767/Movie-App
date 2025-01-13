
import './css/App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Favorites from './pages/favorites';
import NavBar from './componets/NavBar';
import { MovieProvider } from './contexts/MovieContext';

function App() {

  return (
    
    <MovieProvider>
      <NavBar />
      <main className='main-content'>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path='/favorites' element={<Favorites />}/>
        </Routes>
      </main>
    </MovieProvider>
    
  )
}

function Text({displayString}) {
  return(
    <div><p>{displayString}</p></div>
  )
}

export default App
