import React from "react";
import Tareas from "./tareas.jsx";


//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<h1>Tareas por hacer</h1>
			 <Tareas/>
		</div>
	);
};

export default Home;
