import './App.css';
import {Routes, Route} from "react-router-dom";
import Navbar from './components/Navbar';
import News from './components/News';
const App = ()=> {
    return (
      <>  
          <Navbar/>
          <h1 className='font-extrabold'>NewsApp -Top headlines</h1>
          <News/>
          <Routes>
            <Route exact path='/'              element={<News country="in" category="general" key="general"/>} />
            <Route exact path='/Business'      element={<News country="in" category="Business" key="Business"/>}/>
            <Route exact path='/Entertainment' element={<News country="in" category="Entertainment" key="Entertainment"/>} />
            <Route exact path='/Sports'        element={<News country="in" category="Sports" key="Sports"/>} />
            <Route exact path='/Science'       element={<News country="in" category="Science" key="Science"/>} />
            <Route exact path='/Health'        element={<News country="in" category="Health" key="Health"/>} />
            <Route exact path='/Technology'    element={<News country="in" category="Technology" key="Technology"/>} />
          </Routes>
      </>
      
    )
 
}

export default App;
