import './App.css';
import MainNav from './components/mainNav';
import Footer from './components/footer';
import ProductIndex from './components/products/productIndex';


function App() {
  return (
    <div className="App">
      <MainNav />
      <ProductIndex />
      <Footer />
    </div>
  );
}

export default App;
