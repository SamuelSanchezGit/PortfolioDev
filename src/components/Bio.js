import React from 'react';
import bioImage from '../assets/bio.png'; // Assurez-vous d'avoir une image de bio dans ce dossier

const Bio = () => {
  return (
    <div id="bio" className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-4xl font-bold mb-4">À propos de moi</h1>
      <div className="flex flex-col md:flex-row items-center md:items-start md:justify-center max-w-4xl mx-auto">
        <img src={bioImage} alt="Bio" className="w-48 h-48 object-cover rounded-full mb-4 md:mb-0 md:mr-8 shadow-lg border-4 border-gray-300" />
        <div className="text-center md:text-left max-w-xl">
          <p className="text-lg mb-4">Je m'appelle Samuel Sanchez, un développeur web passionné par la création de solutions innovantes. J'ai de l'expérience en développement front-end et back-end, et j'adore travailler sur des projets créatifs qui résolvent des problèmes réels.</p>
          <p className="text-lg">En dehors du développement, j'aime collaborer avec des équipes. Par exemple, je collabore actuellement avec un serveur Discord où je fais du multi-tâches, de la création de bots musique, et je travaille sur un site pour leur serveur RP ainsi qu'une comptabilité scriptée sur Google Sheets. N'hésitez pas à me contacter si vous souhaitez en savoir plus sur mes projets ou si vous avez des opportunités de collaboration intéressantes !</p>
        </div>
      </div>
    </div>
  );
}

export default Bio;
