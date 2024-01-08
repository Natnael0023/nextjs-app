import {db} from '../utils/db'
import HeroSection from './components/herosection/HeroSection'
import Features from './components/features/Features'
import Testimonials from './components/testimonials/Testimonials'
import Faqs from './components/faq/Faqs'
import Solutions from './components/solutions/Solutions'


export default function Home() {
  return (
    <main className="">
    <HeroSection/>
    <Solutions/>
    <Features/>
    <Testimonials/>
    <Faqs/>
    </main>
  )
}