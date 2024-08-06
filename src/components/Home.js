import React from 'react';
import Project from './Project';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import projectImage1 from '../assets/portfolio2dgame.png';
import projectImage2 from '../assets/craftify.png';
import projectImage3 from '../assets/theshop.png';

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true
  };

  return (
    <div id="home" className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold mb-4">Bienvenue sur mon Portfolio</h1>
      <p className="text-lg mb-2">Découvrez mes projets et compétences.</p>
      <p className="text-sm mb-8 text-gray-600">Swipe left or right to see more projects</p>
      <Slider {...settings} className="w-full md:w-2/3 lg:w-1/2">
        <Project 
          title="Portfolio2DGame"
          description="Un projet de jeu en 2D que j'ai développé pour démontrer mes compétences en programmation et design."
          imageUrl={projectImage1}
          projectUrl="https://myportfoliosamuelsanchez.netlify.app/"
        />
        <Project 
          title="Craftify"
          description="Un projet e-commerce réalisé en groupe chez Becode pour aider les artisans à créer des boutiques en ligne."
          imageUrl={projectImage2}
          projectUrl="https://craftify-project.myportfolio.com/"
        />
        <Project 
          title="TheShop"
          description="Une concession pour un serveur RP, avec un catalogue fonctionnel contenant les données des voitures."
          imageUrl={projectImage3}
          projectUrl="https://theshopny.netlify.app/"
        />
      </Slider>
    </div>
  );
}

export default Home;
