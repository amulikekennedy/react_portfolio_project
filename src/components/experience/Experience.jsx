import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
       <h5>My Skills </h5>
      <h2>Experience</h2>

      <div className="container experience__container">
        <div className="experience__tab">
          <h3>Languages</h3>
          <div className="experince__content">
            <article className="experience__details">
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Java</h4>
                  <small className='text-light' >Intermediate</small> 
                </div>
            </article>
            <article className="experience__details">
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>PHP</h4> 
                  <small className='text-light' >Intermaediate</small> 
                </div>
            </article>
            <article className="experience__details">
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>JavaScript</h4>
                  <small className='text-light' >intermediate</small> 
                </div>
            </article>
            <article className="experience__details">
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>C++</h4>
                  <small className='text-light' >Intermediate</small> 
                </div>
            </article>
          </div>
        </div>
        <div className="experience__tab">
          <h3>Web Technologies</h3>
          <div className="experince__content">
            <article className="experience__details">
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Laravel</h4>
                  <small className='text-light' >Experienced</small> 
                </div>
            </article>
            <article className="experience__details">
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>React</h4> 
                  <small className='text-light' >Intermaediate</small> 
                </div>
            </article>
            <article className="experience__details">
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Bootstrap & Tailwind</h4>
                  <small className='text-light' >Experienced</small> 
                </div>
            </article>
            <article className="experience__details">
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>HTML</h4>
                  <small className='text-light' >Experienced</small> 
                </div>
            </article>
          </div>
        </div>
        <div className="experience__tab">
          <h3>Data & DevOps</h3>
          <div className="experince__content">
            <article className="experience__details">
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>MySQL</h4>
                  <small className='text-light' >Experienced</small> 
                </div>
            </article>
            <article className="experience__details">
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>MongoDB</h4> 
                  <small className='text-light' >Basic</small> 
                </div>
            </article>
            <article className="experience__details">
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Git & GitHub</h4> 
                  <small className='text-light' >Intermediate</small> 
                </div>
            </article>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Experience