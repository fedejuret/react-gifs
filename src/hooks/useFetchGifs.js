import { useState, useEffect } from 'react';
import {getGifs} from '../helpers/GetGifs';

export const useFetchGifs = ( category) => {
   
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    // useEffect sirve para que el contenido del mismo
    // sea ejcutado SOLAMENTE cuando se carga el componente 1 vez
    useEffect(() => {
        getGifs( category )
        .then(imgs => {
            
            setTimeout( () => {
                setState({
                    data: imgs,
                    loading: false
                });
            }, 1000);
        })

    }, [category])

    return state;
}
