export default function Footer() {
    return (
        <footer className="bg-light text-center text-lg-start py-5 mt-5">
            <div className="container">
                <div className="row row-col-1 row-cols-md-3">
                    <div className="col">
                        <h3>My Movies</h3>
                        <p>Recensioni di film</p>
                        <p>Contattaci: info@mymovies.com</p>
                        <p>Socials:</p>
                        <ul>
                            <li>
                                <a href="#">Facebook</a>
                            </li>
                            <li>
                                <a href="#">Twitter</a>
                            </li>
                            <li>
                                <a href="#">Instagram</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col">
                        <h3>Link utili</h3>
                        <ul className="list-unstyled">
                            <li>
                                <a href="/">Home</a>
                            </li>
                            <li>
                                <a href="/products">Movies</a>
                            </li>
                            <li>
                                <a href="/contacts">Contacts</a>
                            </li>
                        </ul>
                    </div>
                    <div className="col">
                        <h3>Legal</h3>
                        <ul className="list-unstyled">
                            <li>
                                <a href="#">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="#">Terms of Service</a>
                            </li>
                            <li>
                                <a href="#">Cookies Policy</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row row-cols-2 g-1 mt-5">
                    <div className="col">
                        <p className="">© Copyright {new Date().getFullYear()} </p>
                    </div>
                    <div className="col text-end">
                        <div className="dropdown">
                            <button
                                className="btn btn-dark dropdown-toggle"
                                type="button"
                                id="triggerId"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                Lingue
                            </button>
                            <div className="dropdown-menu" aria-labelledby="triggerId">
                                <a className="dropdown-item" href="#">English</a>
                                <a className="dropdown-item" href="#">Spanish</a>
                                <a className="dropdown-item" href="#">French</a>
                                <h6 className="dropdown-header">Other Languages</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}