import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About';
import Header from './components/Header'
import Footer from './components/Footer';
import '@fontsource/inter/100.css'; // Thin
import '@fontsource/inter/200.css'; // Extra Light
import '@fontsource/inter/300.css'; // Light
import '@fontsource/inter/400.css'; // Regular
import '@fontsource/inter/500.css'; // Medium
import '@fontsource/inter/600.css'; // Semi Bold
import '@fontsource/inter/700.css'; // Bold
import '@fontsource/inter/800.css'; // Extra Bold
import '@fontsource/inter/900.css'; // Black


const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <Footer />
    </Router>
  )
}
export default App