import React from 'react'
import react_portolio from '../../images/book.jpeg';
import studentQuiz from '../../images/invoice.jpeg';
import furniture from '../../images/uiux.jpeg';
import photoart from '../../images/uiux.png';
import aksayasweets from '../../images/akshayasweets.png'
import jenifer from '../../images/jeniferbridel.png'
import decor from '../../images/Screenshot 2024-05-14 110822.png'
import fotog from '../../images/fotog.png'
import './projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'UI Designs',
      description: 'These are some of the UI designs that have been done using Figma.',
      img: photoart,
      link: 'https://www.figma.com/design/92wi8gWW5xXVT3NXzSzjB9/Fagro-Design?node-id=0-1&t=TIhMHLdXovOEpWL0-0'
    },
    {
      id: 2,
      title: 'Portfolio App',
      description: 'This Portfolio have been created using react.',
      img: furniture,
      link: 'https://github.com/sathishjarvis/portfolio-application-'
    }, {
      id: 3,
      title: 'Invoice Generator',
      description: 'This project have been done using html,css,js It will find GST of Goods. ',
      img: studentQuiz,
      link: 'https://sathishjarvis.github.io/invoiceGenerator/'
    },
    {
      id: 4,
      title: 'Login Authentication',
      description: 'This is an login Authentication based project created using React Js.',
      img: react_portolio,
      link: "https://github.com/sathishjarvis/Login-Authentication.git"
    },
    {
      id: 5,
      title: 'Akshaya Sweets',
      description: 'This was a Bakery Showcase website with all catalouge.',
      img: aksayasweets,
      link: "https://github.com/sathishjarvis/Login-Authentication.git"
    },
    {
      id: 6,
      title: 'jenifer Bridel',
      description: 'This is the jenifer bridal studio website technology used by Html, css and Javascript.',
      img: jenifer,
      link: "https://github.com/sathishjarvis/Login-Authentication.git"
    },
    {
      id: 7,
      title: 'FotoG',
      description: 'This is the Photograft website technology used by Html, css and Javascript.',
      img: fotog,
      link: "https://sathishjarvis.github.io/FotoG/index.html"
    },
    {
      id: 7,
      title: 'decor decoder',
      description: 'This is the decor decoder website technology used by Html, css and Javascript.',
      img: decor,
      link: "https://sathishjarvis.github.io/furniture/"
    },
  ];
  return (
    <div className="projects">
      <div className='aboutme-sentence' data-aos="fade-up" data-aos-duration="2000">
        <p className="aboutme-text">Take a Look at My Amazing Projects</p>
      </div>
      <div className="project-card" data-aos="fade-up" data-aos-duration="2000">
        {projects.map(project => (
          <div key={project.id} className="project-1" data-aos="fade-up" data-aos-duration="2000">
            <img src={project.img} alt={project.title} />
            <div className="project-overlay">
              <h1 className="project-heading">{project.title}</h1>
              <p className="project-body">{project.description}</p>
              <a href={project.link} target='blank'><button className="project1-view">View</button></a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects