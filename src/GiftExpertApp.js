import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GiftGrid } from './components/GiftGrid';

export const GiftExpertApp = () => {


	const [categories, setCategories] = useState(['Trending']);

	// const handleAdd = () => {
	// 	setCategories(cat => [...cat, 'Fede']);
	// }

	return (

		<div>

			<div className="card-custom">
				<h2 className="text-center">Buscador de Gifs</h2>
				<AddCategory setCategory={setCategories} />
			</div>

			<ol className="mt-3">
				{
					categories.map(category => (
						<GiftGrid
							key={category}
							category={category}
						/>
					))
				}
			</ol>

		</div>

	);

}