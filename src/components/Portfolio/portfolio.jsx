import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/portfolio1.jpg';
import IMG2 from '../../assets/portfolio2.jpg';
import IMG3 from '../../assets/portfolio3.jpg';
import IMG4 from '../../assets/portfolio4.jpg';
import IMG5 from '../../assets/portfolio5.png';
import IMG6 from '../../assets/portfolio6.jpg';

// Dynamically imported the data by javascript arrays
const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Title - 1',
    github: 'https://github.com',
    demo: 'portfolio1.jpg'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Title - 2',
    github: 'https://github.com',
    demo: 'portfolio2.jpg'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Title - 3',
    github: 'https://github.com',
    demo: 'portfolio3.jpg'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Title - 4',
    github: 'https://github.com',
    demo: 'portfolio4.jpg'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Title - 5',
    github: 'https://github.com',
    demo: 'portfolio5.jpg'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Title - 6',
    github: 'https://github.com',
    demo: 'portfolio6.jpg'
  }
]

function portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work </h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">

        {
          data.map(({id, image, title, github, demo}) => {
           return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3> {title} </h3>
              <div className="portfolio__item-cta">
              <a href= {github} className='btn' target='_blank' rel="noopener noreferrer"> Github </a>
              <a href= {demo} className='btn btn-primary' target='_blank' rel="noopener noreferrer"> Live Demo </a>
              </div>
          </article>
           );
          })
        }
        
        

       

      </div>
    </section>
  )
}

export default portfolio






// const data = [
//   {
//     id: 1,
//     image: IMG1,
//     title: 'Title - 1',
//     github: 'https://github.com',
//     demo: 'portfolio1.jpg'
//   }
// ]