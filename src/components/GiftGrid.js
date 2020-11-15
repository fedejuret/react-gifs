import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GridItem } from "./GridItem";

export const GiftGrid = ({ category }) => {



    //     Renombrar
    const {data:images, loading} = useFetchGifs(category);

    // useEffect sirve para que el contenido del mismo
    // sea ejcutado SOLAMENTE cuando se carga el componente 1 vez
    // useEffect(() => {
    //     getGifts(category)
    //         .then(setImages);
    // }, [category])



    return (
        <>
            <h1 className="mb-4 mt-5"> {category} </h1>

            { loading && 'Cargando...'}

            <div className="row">
                {
                    images.map(img => (
                        <GridItem
                            key={img.id}
                            {...img}
                        />
                    ))
                }
            </div>
        </>
    )
}
