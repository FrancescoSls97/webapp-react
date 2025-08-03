import { Link } from "react-router-dom";

export default function Card() {

    return (
        <div className="col">
            <Link to={"/movies/:id"} class="card">
                <img src="https://st.depositphotos.com/2274151/4841/i/450/depositphotos_48410095-stock-photo-sample-blue-square-grungy-stamp.jpg" class="card-img-top" alt="movie_cover" />
                <div class="card-body">
                    <h5 class="card-title">Titolo film</h5>
                    <p class="card-text">Trama del film</p>
                </div>
            </Link>
        </div>
    )
}