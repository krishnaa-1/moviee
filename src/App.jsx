import About from './About';
import Contact from './Contact';
import HomePage from "./HomePage";
import {Routes, Route} from 'react-router-dom';
import MoviePageDetails from './MoviePageDetails';

function App() {
  return (
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/moviedetails/:name/:description/:genre/:image" element={<MoviePageDetails />}></Route>
      </Routes>
  );
}
//done
//kashihs ka kaam


export default App;
