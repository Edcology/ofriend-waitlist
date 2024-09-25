import {BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About';
import Header from './components/Header'
import Footer from './components/Footer';
import '@fontsource/poppins/400.css'; // Regular weight
import '@fontsource/poppins/500.css'; // Medium (semi-bold)
import '@fontsource/poppins/600.css'; // Semi-bold
import '@fontsource/poppins/700.css'; // Bold



const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
export default App