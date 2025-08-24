import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header/Header'
import HeroSection from './Components/HeroSection/HeroSection'
import Home from './Components/Home/Home'
import Paralex from './Components/Paralex/Paralex'
import Limitless from './Components/Limitless/Limitless'
import Projects from './Components/Projects/Projects'
import Customers from './Components/Customers/Customers'
import ClientSlideShow from './Components/ClientSlideShow/ClientSlideShow'
import QuestionSection from './Components/QuestionSection/QuestionSection'
import Footer from './Components/Footer/Footer'
function App() {
  const [count, setCount] = useState(0)
  const HomeDate = [
    {
      orderCol: "rtl",
      bgColor: "bg-white",
      imgAddress: "./Home/Portfolio Section.png",
      title: "SEO Friendly",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pulvinar luctus sem, eget porta orci. Maecenas molestie dui id diam feugiat, eu tincidunt mauris aliquam. Duis commodo vitae ligula et interdum. Maecenas faucibus mattis imperdiet. In rhoncus ac ligula id ultricies.",
      btnText: "READ MORE"
    },
    {
      orderCol: "ltr",
      bgColor: "bg-grey",
      imgAddress: "./Home/Portfolio Section.png",
      title: "Portfolio Section",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam pulvinar luctus sem, eget porta orci. Maecenas molestie dui id diam feugiat, eu tincidunt mauris aliquam. Duis commodo vitae ligula et interdum.",
      btnText: "SEE IT AN ACTION"
    },
  ]
  return (

    <div>
      <Header />
      <HeroSection />
      <Home {...HomeDate[0]} />
      <Home {...HomeDate[1]} />
      <Paralex />
      <Limitless />
      <Projects />
      <Customers />
      <ClientSlideShow />
      <QuestionSection />
      <Footer />
    </div>


  )
}

export default App
