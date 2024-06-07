import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Preview from './pages/Preview';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (

      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/preview/:id" element={<Preview />} />
          <Route path='/*' element={<Navigate to={'/'}/>}/>
        </Routes>
        <Footer />
      </>

  );
}

export default App;
