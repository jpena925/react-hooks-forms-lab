import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onAddItemToList }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("")

  function handleCategoryChange(e) {
    setSelectedCategory(e.target.value);
  }

  function handleNameInput(event) {
    setSearch((search) => event.target.value)
  }

  let itemsToDisplay;

  

  if(search){
    itemsToDisplay = items.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
  } else {
    itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  })
  }

  return (
    <div className="ShoppingList">
      <ItemForm onAddItemToList={onAddItemToList}/>
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleNameInput} search={search}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
