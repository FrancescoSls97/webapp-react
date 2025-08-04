import { Link } from "react-router-dom";


export default function Card({ movie }) {
    console.log(movie);

    return (
        <div className="col">

            <div className="card h-100">
                <img className="card-img-top" src={movie.image} alt={movie.title} />
                <div className="card-body">
                    <h5 className="card-title">{movie.title}</h5>
                    <p className="card-text">{movie.abstract}</p>
                    <Link to={`/movies/${movie.id}`} className="btn btn-primary m-2"> Recensione </Link>
                </div>
            </div>

        </div>
    )
}