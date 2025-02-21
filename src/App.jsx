import About from './About';
import Contact from './Contact';
import HomePage from "./HomePage";
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
  );
}

export default App;
