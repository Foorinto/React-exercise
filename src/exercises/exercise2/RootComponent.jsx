import React from 'react';
import { useState } from 'react';
import './RootComponent.css';

const RootComponent = () => {

	/*
	* Name of the shop variable and function
	*/

	const [nameShop, setnameShop] = useState("Shop 1");
	const changeShop = () => setnameShop(nameShop === "Shop 1" ? "Shop 2" : "Shop 1");

	/*
	* Variable input and value calculated
	*/

	const [number, setNumber] = useState('');
	const [numberForm, setNumberForm] = useState(false);

	/*
	* Handle submit of the form
	*/

	const handleSubmitNumber = (e) => {
		e.preventDefault();
		setNumberForm(number);
	}

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

			<div className='d-flex justify-content-between align-items-center mt-5'>
				<form
					onSubmit={ handleSubmitNumber }
				>
					<input
						type="number"
						required
						onChange={ (e) => setNumber(e.target.value) }
					/>
					{ number > 0 &&
						<button>Calculate change for <span>{ number }</span></button>
					}
				</form>
				{ numberForm &&
					<p className='mt-0 mb-0'>{ numberForm }</p>
				}
			</div>
		</div>
	)

};

export default RootComponent;