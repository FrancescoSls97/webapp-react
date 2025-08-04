import Card from "../components/Card";
import { useGlobalContext } from "../contexts/GlobalContext";

export default function MoviesList() {

    const { movies } = useGlobalContext()

    return (
        <div className="row row-cols-2 row-cols-md-4 row-cols-lg-5 g-3">
            {movies.map(movie => (

                <Card movie={movie} key={movie.id} />

            ))}
        </div>
    )
}