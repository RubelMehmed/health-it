// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import './App.css';
import About from './Pages/About/About';
import Booking from './Pages/Booking/Booking';
import AuthProvider from './Pages/Context/AuthProvider';
import Footer from './Pages/Footer/Footer';
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import PageNotFound from './Pages/PageNotFound/PageNotFound';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Register from './Pages/Register/Register';
import Services from './Pages/Services/Services';
import Testimonials from './Pages/Testimonials/Testimonials';

function App() {
  return (
    <div className="App">
     <AuthProvider>
        <Router>
          <Header></Header>
            <Routes>
              <Route exact path="/" element={<Home />}/>
              
              <Route path="/home" element={<Home />}/>

              
              <Route path="/about" element={<About />}/>
 
              <PrivateRoute path="/service" element={<Services />}/>
                
              <Route path="/testimonial" element={<Testimonials />}/>
              
              <PrivateRoute path="/booking" element={<Booking />}/>
               
              <Route path="/login" element={<Login />}/>
               
              <Route path="/register" element={<Register />}/>

              <Route path="*" element={<PageNotFound />}/>
             
            </Routes>
            <Footer></Footer>
          </Router>
     </AuthProvider>
    </div>
  );
}

export default App;