import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/Card";
import MoviesList from "../components/MoviesList";
import { Link } from "react-router-dom";
import SingleMoviePage from "./SingleMoviePage";

export default function HomePage() {
    return (

        <>

            <main>
                <section id="jumbo-section">
                    <div className="p-5 mb-4 bg-primary rounded-3">
                        <div className="container-fluid py-5">
                            <h1 className="display-5 fw-bold">Recensioni per tutti i gusti</h1>
                            <p className="col-md-8 fs-4">
                                Qui puoi trovare tante recensioni per film di ogni genere, dai film piu famosi di Hollywood che incassano miliardi al botteghino, fino ai film dimenticati dal mondo che puoi trovare solo sulle migliori bancarelle abusive.
                                Ce n'è per tutti!!
                            </p>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="container">
                        <h3 className="text-center fs-2 m-5">I migliori film</h3>


                        <MoviesList />


                    </div>
                </section>
            </main>

        </>
    )
}