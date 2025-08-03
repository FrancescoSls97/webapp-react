

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
    </>
  )
}

export default App
