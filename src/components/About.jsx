import React from "react";
import {Tilt} from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const onButtonClick = () => {  
  fetch('/download/Walter_Gomez.pdf').then(response => {
    response.blob().then(blob => {   
      const fileURL = window.URL.createObjectURL(blob);     
      let alink = document.createElement('a');
      alink.href = fileURL;
      alink.target = '_black'
      alink.download = 'Walter_Gomez.pdf';
      alink.click();
    })
  })
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduccion</p>
        <h2 className={styles.sectionHeadText}>Sobre Mi.</h2>      
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
       "Soy un desarrollador full-stack con más de 30 años de experiencia en finanzas y administración. 
       Como experto en finanzas, he liderado equipos, administrado presupuestos y
       diseñado estrategias financieras exitosas. Ahora, como desarrollador full-stack,
       puedo aplicar esas habilidades para diseñar soluciones de software eficientes y rentables.
       Tengo habilidades técnicas sólidas en lenguajes de programación como HTML, CSS,JavaScript, Python y Java
       y con experiencia en frameworks como React, Node.js, Flask y FastAPI. 
       Además tengo habilidades blandas que son fundamentales para un buen desempeño en cualquier trabajo:
       soy un comunicador efectivo, tengo una gran capacidad de liderazgo y resolución de problemas, 
       y siempre estoy buscando maneras de mejorar. Soy un jugador de equipo confiable y un líder entusiasta,
       y me apasiona trabajar en proyectos innovadores y de vanguardia.
       Si busca a alguien que pueda brindar una combinación única de habilidades técnicas y de liderazgo, 
       no busque más. Estoy seguro de que puedo hacer una contribución valiosa a su equipo 
       y llevar su empresa al siguiente nivel".

       <div className='mt-4 text-secondary text-[22px] max-w-3xl leading-[30px] cursor-pointer'>          
          <button onClick={onButtonClick}>
					   Descargar mi CV-Resumen
				  </button>
          <a href="https://www.linkedin.com/in/walter-gomez-fullstack-developer-jr-java-python-adm-finanzas/" target="_black"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Mi linkedIn</a>
      </div>    
      </motion.p>  
      
      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");