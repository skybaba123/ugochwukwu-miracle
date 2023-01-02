import React, { useEffect, useState } from 'react'
import './index.scss'
// import LogoTitle from '../../assets/images/logo-s.png'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../Animated-Letters'
import Logo from '../Logo'
import Loader from 'react-loaders'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ' Ugochukwu'.split('')
  const jobArray = 'Frontend Dev'.split('')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <Loader type="pacman" />

      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            {/* <img src={LogoTitle} alt="developer" /> */}
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2>JavaScript / React / React Native</h2>
          <Link to="/contact" className="flat-button">
            Contact Me
          </Link>
          <Link to="/portfolio" className="flat-button">
            Projects
          </Link>
        </div>
        <Logo />
      </div>
    </>
  )
}

export default Home