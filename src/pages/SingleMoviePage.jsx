import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export default function SingleMoviePage() {
    const { id } = useParams()
    const api_server_url = `${import.meta.env.VITE_BACKEND_API_SERVER + import.meta.env.VITE_BACKEND_MOVIES_ENDPOINT}/${id}`
    const [movie, setMovie] = useState([])
    const [formData, setFormData] = useState({
        name: '',
        vote: 1,
        text: ''
    })

    useEffect(() => {
        fetch(api_server_url)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setMovie(data)

            })
    }, [])

    function handleSubmit(e) {
        e.preventDefault()

        fetch(`${api_server_url}/reviews`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.error) {
                    return
                }
                setMovie(prevState => ({
                    ...prevState,
                    reviews: [...prevState.review, data]
                }))

                setFormData({
                    name: '',
                    vote: 1,
                    text: ''
                })
            })
    }

    return (

        <div className="container">
            {movie.length === 0 ? (
                <p>Loading...</p>
            ) : (
                <>
                    <div id="movieCard" className="card">
                        <img className="card-img-top" height={700} src={import.meta.env.VITE_BACKEND_API_SERVER + movie.image} alt="" />
                        <h5 className="card-title p-4">{movie.title}</h5>
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

                    <h3 className="text-center fs-2 m-5"> Dicci la tua sul film</h3>
                    <div className="card p-4">
                        <form className="card p-3" onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Nome</label>
                                <input type="text" className="form-control" id="name" placeholder="Inserisci il tuo nome" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="vote" className="form-label">Voto</label>
                                <input type="number" step={1} min={1} max={5} className="form-control" id="vote" placeholder="Dai un voto da 1 a 5" value={formData.vote}
                                    onChange={(e) => setFormData({ ...formData, vote: e.target.value })} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="text" className="form-label">La tua recensione</label>
                                <textarea className="form-control" id="text" rows="3" value={formData.text}
                                    onChange={(e) => setFormData({ ...formData, text: e.target.value })}></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">Invia la tua recensione</button>
                        </form>
                    </div>
                </>
            )}
        </div>
    )
}