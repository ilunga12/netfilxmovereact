import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Latest from './Latest';
import Comedy from './Comedy';
import Trending from './Trending';
import Footer from './Footer';
import Home from './Home';

function App() {
  return (
  <BrowserRouter>
  <Header/>
  <Routes>
   <Route path='/home' element={<Home/>} /> 
  <Route path='/latestmovies' element={<Latest/>} />
  <Route path='/comedymovie' element={<Comedy/>} />
  <Route path='/trendingmovie' element={<Trending/>} /> 
   

  </Routes>
  <Footer/>

  </BrowserRouter>
    )
}

export default App;
