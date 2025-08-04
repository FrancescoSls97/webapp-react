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

                        <h3 className="text-center fs-2 m-5"> Dicci la tua su un film</h3>
                        <div className="card p-4">
                            <form>
                                <input type="text" className="form-control m-2" placeholder="Nome del film" />
                                <input type="text" className="form-control m-2" placeholder="Nickname" />
                                <textarea className="form-control m-2" rows="2" placeholder="Scrivi qui la tua recensione"></textarea>
                            </form>
                        </div>
                    </div>
                </section>
            </main>

        </>
    )
}