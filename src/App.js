import './App.css';
import About from './Components/About';
import Blog from './Components/Blog';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home';
import Menu from './Components/Menu';
import Products from './Components/Products';
import Review from './Components/Review';

function App() {
  return (
    <>
      <Header />
      <Home />  
      <About />
      <Menu />
      <Products />
      <Review />
      <Contact />
      <Blog />
      <Footer />
    </>
  );
}

export default App;
