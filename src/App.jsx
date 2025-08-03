

function App() {


  return (
    <>
      <header>
        <nav className="navbar navbar-expand-sm navbar-light p-3">
          <div className="container-fluid">
            <a href="#" className="navbar-brand">My Movies Site</a>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                <li className="nav-item"><a href="" className="nav-link">Movies</a></li>
                <li className="nav-item"><a href="" className="nav-link">Contacts</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
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
              <div className="col">
                <div class="card">
                  <img src="https://st.depositphotos.com/2274151/4841/i/450/depositphotos_48410095-stock-photo-sample-blue-square-grungy-stamp.jpg" class="card-img-top" alt="movie_cover" />
                  <div class="card-body">
                    <h5 class="card-title">Titolo film</h5>
                    <p class="card-text">Trama del film</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div class="card">
                  <img src="https://st.depositphotos.com/2274151/4841/i/450/depositphotos_48410095-stock-photo-sample-blue-square-grungy-stamp.jpg" class="card-img-top" alt="movie_cover" />
                  <div class="card-body">
                    <h5 class="card-title">Titolo film</h5>
                    <p class="card-text">Trama del film</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div class="card">
                  <img src="https://st.depositphotos.com/2274151/4841/i/450/depositphotos_48410095-stock-photo-sample-blue-square-grungy-stamp.jpg" class="card-img-top" alt="movie_cover" />
                  <div class="card-body">
                    <h5 class="card-title">Titolo film</h5>
                    <p class="card-text">Trama del film</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div class="card">
                  <img src="https://st.depositphotos.com/2274151/4841/i/450/depositphotos_48410095-stock-photo-sample-blue-square-grungy-stamp.jpg" class="card-img-top" alt="movie_cover" />
                  <div class="card-body">
                    <h5 class="card-title">Titolo film</h5>
                    <p class="card-text">Trama del film</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div class="card">
                  <img src="https://st.depositphotos.com/2274151/4841/i/450/depositphotos_48410095-stock-photo-sample-blue-square-grungy-stamp.jpg" class="card-img-top" alt="movie_cover" />
                  <div class="card-body">
                    <h5 class="card-title">Titolo film</h5>
                    <p class="card-text">Trama del film</p>
                  </div>
                </div>
              </div>
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
    </>
  )
}

export default App
