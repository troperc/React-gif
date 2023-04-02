import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch']);
  
  //agregar por medio de un boton a la lista
  const onAddCategory = (newCategory) =>{

    if(categories.includes(newCategory)) return;
    console.log(newCategory);
    //setCategories([...categories,'valorant'])
    setCategories([newCategory,...categories])
  }
  
  return (
    <>
    {/*titulo*/}
    <h1> Gif Expert App</h1>
    {/*Input*/}
    <AddCategory 
    //setCategories={setCategories}
    onNewCategory={(value) => onAddCategory(value)}
    />
    {/*}
    <button onClick={onAddCategory}>Agregar</button>
    {*/}

    {
      categories.map(category => 
        <GifGrid key={category} category={category}/>
      )
    }

    </>
  )
}
