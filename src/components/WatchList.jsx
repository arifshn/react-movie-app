import WatchListMovie from "./WatchListMovie";

export default function WatchList({ movies, title, removeFromWatchList }) {
  return (
    <>
      {
        <div className="container py-3">
          <h1 className="mb-3 h4">{title}</h1>
          {movies.length == 0 ? (
            <div>Film bulunamadı</div>
          ) : (
            <div
              id="movie-list"
              className="row row-cols-2 row-cols-md-3 row-cols-lg-4 g-4"
            >
              {movies.map((m, index) => (
                <WatchListMovie
                  key={index}
                  movieObj={m}
                  removeFromWatchList={removeFromWatchList}
                />
              ))}
            </div>
          )}
        </div>
      }
    </>
  );
}
