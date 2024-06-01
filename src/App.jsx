import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Preview from './pages/Preview';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (

      <>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/preview" element={<Preview />} />
        </Routes>
        <Footer />
      </>

  );
}

export default App;
