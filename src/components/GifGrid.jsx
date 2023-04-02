import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs"
import { GifItem } from "./GifItem"
import { useFetchGif } from "../hooks/useFetchGif"

export const GifGrid = ({category}) => {

  const {images,isLoading} = useFetchGif(category)
  console.log(images,isLoading)

  return (
    <>
        <h3>{category}</h3>

        {
          isLoading && (<h2>Cargando...</h2>)
        }

        <div>
          {
            images.map( (images) => (
              <GifItem key={images.id} 
              // enviamos todas las props al componente de gifitem
              {...images}/>
            ))
          }
        </div>
    </>
  )
}





