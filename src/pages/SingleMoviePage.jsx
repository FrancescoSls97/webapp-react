import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function SingleMoviePage() {
    const { id } = useParams()
    const api_server_url = `${import.meta.env.VITE_BACKEND_API_SERVER}/${id}`
    const [movie, setMovie] = useState([])

    useEffect(() => {
        fetch(api_server_url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setMovie(data)

            })
    }, [])

    return (

        <div className="container">
            {movie.length === 0 ? (
                <p>Loading...</p>
            ) : (
                <>
                    <div id="movieCard" className="card">
                        <img className="card-img-top" src={movie.image} alt={movie?.title} />
                        <div className="card-body">
                            <h5 className="card-title">{movie.title}</h5>
                        </div>
                    </div>
                    <div className="row row-cols-2 row-cols-md-4 row-cols-lg-5 g-3">
                        <div className="col">
                            <div id="reviewCard" className="card">
                                <div className="card-body">
                                    {movie.reviews.map(review => (
                                        <div className="div" key={review.id}>
                                            <h5>{review.name}</h5>

                                            <p>{review.text}</p>

                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}