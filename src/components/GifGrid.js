import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';
// import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({ category }) => {
    // const [images, setImages] = useState([]);
    // const api_key = 'PJ3DOeHePNWRJUsZJX9eV8Hu8VDpaWc9';
    // const end_point = 'api.giphy.com/v1/gifs/search';
    const { data: images, loading } = useFetchGifs(category);


    return (
        <>
            <h3 className="animate__animated animate__flash">{category}</h3>
            {loading && <p className="animate__animated animate__fadeIn">Cargando...</p>}
            <div className="card-grid">
                {images.map(img => (
                    <GifGridItem key={img.id} {...img} />
                ))}

            </div>
        </>
    )
}
