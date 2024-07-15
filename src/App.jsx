import './App.css'
import Experiance from './pages/experiance/Experiance'
import Footer from './pages/footer/Footer'
import Contact from './pages/home/contact/Contact'
import Home from './pages/home/Home'
import Navcmp from './pages/nav-cmp/Navcmp'
import Review from './pages/review/Review'
import Skill from './pages/skill/Skill'
import Stat from './pages/stat/Stat'


function App() {

  return (
    <>
      <Navcmp/>
      <Home/>
      <Stat/>
      <Skill/>
      <Experiance/>
      <Review/>
      <Contact/>
      <Footer/>
    </>

  )
}

export default App
