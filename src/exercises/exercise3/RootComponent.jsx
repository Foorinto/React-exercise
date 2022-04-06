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
	const [numberForm, setNumberForm] = useState('');

	/*
	* Handle submit of the form
	*/

	const handleSubmitNumber = (e) => {
		e.preventDefault();
		setNumberForm(number);
		changesCalculation();
	}

	/*
	* Variable to calculate change
	*/

	const [changeResult, setChangeResult] = useState([]);

	/*
	* Calculate change
	*/

	const changesCalculation = () => {
		if (number <= 0) {
			return;
		}

		let moneyAvilable = [5, 2, 1];
		let numberRef = number;
		let result = [];

		for (var i = 0; numberRef > 0 && i < moneyAvilable.length; i++) {
			let value = moneyAvilable[i];

			if (value <= numberRef) {
				result[value] = Math.floor(numberRef / value);
				numberRef -= value * result[value];
			}
		}

		setChangeResult(result);
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

			<div className='d-flex justify-content-between align-items-start mt-5'>
				<form
					className='d-flex flex-column align-items-stretch justify-content-stretch'
					style={{ minWidth: '300px' }}
					onSubmit={ handleSubmitNumber }
				>
					<input
						className='p-2 w-100'
						type="number"
						required
						onChange={ (e) => setNumber(e.target.value) }
					/>
					{ number > 0 &&
						<button
							className='p-3 px-4 mt-2'
						>
							Calculate change for <span>{ number }</span> €
						</button>
					}
				</form>
				<div className='d-flex align-items-center justify-content-end fs-4'>
					{ numberForm && <>
						<p className='mt-0 mb-0 p-1 px-3'>Change for { numberForm } € = </p>
						<div className='border-2 border-dark border-start p-1'>
							{changeResult.map(function(val, index){
								return <p className='mb-0 mt-0 px-2' key={ index }>{ val } x { index } €</p>;
							})}
						</div>
						</>
					}
				</div>
			</div>
		</div>
	)

};

export default RootComponent;