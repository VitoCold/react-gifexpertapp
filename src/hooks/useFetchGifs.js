import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {

    const api_key = 'PJ3DOeHePNWRJUsZJX9eV8Hu8VDpaWc9';
    const end_point = 'api.giphy.com/v1/gifs/search';

    const [state, setState] = useState({
        data: [],
        loading: true,
    })

    useEffect(() => {

        getGifs(end_point, category, api_key)
            .then(img => {
                // setTimeout(() => {
                setState({
                    data: img,
                    loading: false
                })
                // }, 3000);
            })

    }, [category]);

    return state;
}