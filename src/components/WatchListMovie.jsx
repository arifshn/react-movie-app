export default function WatchListMovie({ movieObj, removeFromWatchList }) {
  return (
    <div className="col">
      {
        <div className="card movie position-relative">
          <img
            src={"https://image.tmdb.org/t/p/original/" + movieObj.poster_path}
            alt=""
            className="img-fluid rounded-3"
          />
          <div className="card-body">
            <h2 className="h6 card-title">{movieObj.title}</h2>
            <button
              className="btn btn-link fs-5 text-danger position-absolute top-0 start-0"
              onClick={() => removeFromWatchList(movieObj)}
            >
              <i className="bi bi-dash-circle"></i>
            </button>
          </div>
        </div>
      }
    </div>
  );
}
