import "./Home.css"

import { useEffect } from "react"
import { useState } from "react";

const Home = () => {
    const [respuesta, setRespuesta] = useState([])

    useEffect(() => {
        cake();
    }, []);

    const cake = async () => {
        const API_KEY = 'GfTghvhsp2G2dX4-245xxkFw3ZdOeD2FxxRjjwd4dxo'
        const url = `https://api.unsplash.com/search/photos/?client_id=${API_KEY}&query=$cake`;
        const res = await fetch(url);
        const data = await res.json();
        setRespuesta(data.results)
    }

    return (
        <div className="container container-fluid pt-5">
            <div className="row row-cols-1 row-cols-md-2 row-cols-xl-4 g-4 mb-3 pb-3" >
                {
                    respuesta?.map(item => (

                        <div key={item.id} className="col">
                            <div className="card">
                                <img src={item.urls.regular} className="card-img-top" alt="Imagenes de tortas" />
                                <div className="card-body">
                                    <p className="card-text">{item.alt_description}</p>
                                </div>
                            </div>
                        </div>
                    ))


                }
            </div>
        </div>

    )
}

export default Home