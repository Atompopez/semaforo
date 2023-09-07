import React, { useState } from "react";

const Home = () => {
  const [brilloRed, setBrilloRed] = useState('none');
  const [brilloYellow, setBrilloYellow] = useState('none');
  const [brilloGreen, setBrilloGreen] = useState('none');

  function cambiarBrilloRojo() {
    setBrilloRed('0 0 30px 20px white');
    setBrilloYellow('none');
    setBrilloGreen('none');
  }

  function cambiarBrilloAmarillo() {
    setBrilloRed('none');
    setBrilloYellow('0 0 30px 20px white');
    setBrilloGreen('none');
  }

  function cambiarBrilloVerde() {
    setBrilloRed('none');
    setBrilloYellow('none');
    setBrilloGreen('0 0 30px 20px white');
  }

  return (
	<div className="semaforo">
		<div className="soporteSemaforo"></div>
		<div className="cuerpoSemaforo">
			<div className="luz" onClick={cambiarBrilloRojo} style={{ backgroundColor:'red' , boxShadow: brilloRed}}></div>
			<div className="luz" onClick={cambiarBrilloAmarillo} style={{ backgroundColor: 'yellow' , boxShadow: brilloYellow}}></div>
			<div className="luz" onClick={cambiarBrilloVerde} style={{ backgroundColor: 'green' , boxShadow: brilloGreen}}></div>
		</div>
	</div>
  );
};

export default Home;