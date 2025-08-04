import { Link } from "react-router-dom";


export default function Card({ movie }) {
    console.log(movie);

    return (
        <div className="col">
            <div class="card text-decoration-none">
                <img class="card-img-top" src={movie?.image} alt={movie?.title} />
                <div class="card-body">
                    <h5 class="card-title">{movie?.title}</h5>
                    <p class="card-text">{movie?.abstract}</p>
                </div>
            </div>
        </div>
    )
}