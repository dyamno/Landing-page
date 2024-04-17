import Highlights from "./components/Highlights"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import VideoCarousel from "./components/VideoCarousel"
import Model from "./components/Model"
import Features from "./components/Features"
import * as Sentry from '@sentry/react';
import HowItWorks from "./components/HowItWorks"
import Footer from "./components/Footer"
const App = () => {


  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      <VideoCarousel/>
      <Model />
      <Features />
      <HowItWorks />
      <Footer />
    </main>
  )
}

export default Sentry.withProfiler(App);
