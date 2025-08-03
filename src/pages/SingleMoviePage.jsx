
export default function SingleMoviePage() {

    return (
        <div className="container">
            <div id="movieCard" className="card">
                <img src="https://st.depositphotos.com/2274151/4841/i/450/depositphotos_48410095-stock-photo-sample-blue-square-grungy-stamp.jpg" className="card-img-top" alt="movie_cover" />
                <div className="card-body">
                    <h5 className="card-title">Titolo film</h5>
                    <p className="card-text">Trama del film</p>
                </div>
            </div>
            <div className="row row-cols-2 row-cols-md-4 row-cols-lg-5 g-3">
                <div className="col">
                    <div id="reviewCard" className="card">
                        <div className="card-body">
                            <h5>Username</h5>
                            <p>Move review Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque assumenda fuga reiciendis suscipit ad laudantium provident necessitatibus expedita aperiam aliquam? Esse optio necessitatibus vel, eaque consequuntur laborum eius molestiae magni?</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}