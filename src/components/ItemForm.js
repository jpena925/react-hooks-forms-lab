import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onAddItemToList }) {
	const [formData, setFormData] = useState({
		name: "",
		category: "Produce",
	});

	function handleChange(e) {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	}

	function handleAddNewItem(e) {
		e.preventDefault();
		onAddItemToList({
      id: uuid(),
      ...formData
    })
	}

	return (
		<form className="NewItem" onSubmit={handleAddNewItem}>
			<label>
				Name:
				<input
					type="text"
					name="name"
					onChange={handleChange}
					value={formData.name}
				/>
			</label>

			<label>
				Category:
				<select
					name="category"
					onChange={handleChange}
					value={formData.category}>
					<option value="Produce">Produce</option>
					<option value="Dairy">Dairy</option>
					<option value="Dessert">Dessert</option>
				</select>
			</label>

			<button type="submit">Add to List</button>
		</form>
	);
}

export default ItemForm;
