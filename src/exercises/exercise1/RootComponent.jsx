import React from 'react';
import { useState } from 'react';
import './RootComponent.css';

const RootComponent = () => {

	/*
	* Name of the shop variable and function
	*/

	const [nameShop, setnameShop] = useState("Shop 1");
	const changeShop = () => setnameShop(nameShop === "Shop 1" ? "Shop 2" : "Shop 1");

	return (
		<div>
			<div className='d-flex flex-column align-items-center justify-content-center'>
				<button 
					className="btn btn-danger mt-2 py-3 px-4 fs-4" 
					onClick={ changeShop }
				>
					Change shop to visit
				</button>
				<div className="mt-3">
					<h2>Welcome to { nameShop }</h2>
				</div>
			</div>
		</div>
	)

};

export default RootComponent;