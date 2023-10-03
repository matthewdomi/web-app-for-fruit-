import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Footer from '../components/Footer'
import LandingPage from '../components/LandingPage'

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <LandingPage />
      <Footer />
    </div>)
}

export default Home