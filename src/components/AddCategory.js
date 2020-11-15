import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategory }) => {

	const [inputValue, setInputValue] = useState('');

	const handleInputChange = (element) => {
		setInputValue(element.target.value);
	}

	const handleSubmit = (event) => {
		event.preventDefault();

		setCategory(categories => [inputValue, ...categories]);
		setInputValue('');
	}

	return (

		<div className="container text-center">
			<form onSubmit={handleSubmit}>

				<input
					type="text"
					value={inputValue}
					onChange={handleInputChange}
					placeholder="¿Qué quieres buscar?"
				/>

			</form>
		</div>

	)

}

// Marcar que setCategory sea necesario para usar este componente

AddCategory.propTypes = {
	setCategory: PropTypes.func.isRequired
}