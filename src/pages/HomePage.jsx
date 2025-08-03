import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/Card";
import { Link } from "react-router-dom";

export default function HomePage() {
    return (

        <>

            <main>
                <section id="jumbo-section">
                    <div class="p-5 mb-4 bg-primary rounded-3">
                        <div class="container-fluid py-5">
                            <h1 class="display-5 fw-bold">Recensioni per tutti i gusti</h1>
                            <p class="col-md-8 fs-4">
                                Qui puoi trovare tante recensioni per film di ogni genere, dai film piu famosi di Hollywood che incassano miliardi al botteghino, fino ai film dimenticati dal mondo che puoi trovare solo sulle migliori bancarelle abusive.
                                Ce n'è per tutti!!
                            </p>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="container">
                        <h3 className="text-center fs-2 m-5">Potrebbero interessarti alcuni di questi film</h3>
                        <div className="row row-cols-2 row-cols-md-4 row-cols-lg-5 g-3">
                            <Card />

                            <Card />

                            <Card />

                            <Card />

                            <Card />
                        </div>
                        <div className="text-center">
                            <h3 className="text-center fs-2 m-5"> Accedi alla lista completa dei film dispomibili da questo pulsante</h3>
                            <button className="btn btn-primary btn-lg" type="button">
                                Lista film
                            </button>
                        </div>
                    </div>
                </section>
            </main>

        </>
    )
}