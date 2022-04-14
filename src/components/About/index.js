import { useEffect, useState } from 'react'
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faNodeJs,
  faReact,
  
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I'm currently pursuing computer science from Gvpce(A) vizag, i'm a Full stack developer 
            and pentester. i'm currently learning technologies like Blockchain, Big Data and AI.
          </p>
          <p align="LEFT">
            my hobbies include playing Volleyball, Badminton and Chess, i also cook alot (tastes good too!). iam very ambitious, 
            my goal is to become an entrepreneur and make remarkable products that can bring good impact in world. 
          </p>
          <p>
            if i need to define myself in a sentence that would be a ambitious, energetic, creative and tech obsessed person!!!!
          </p>
          <p>
            iam looking forward to collabrate with people in fields of pentesting and entrepreneurship
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faNodeJs} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faReact} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faCss3} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
