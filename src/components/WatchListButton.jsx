export default function WatchListButton({ movies, onsetWatchListOpen }) {
  return (
    <div className="mb-2 mb-lg-0 ms-1">
      <button
        onClick={() => onsetWatchListOpen((prevstate) => !prevstate)}
        type="button"
        className="btn btn-outline-light position-relative"
      >
        <i className="bi bi-heart">
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {movies.length}
            <span className="visually-hidden">unread messages</span>
          </span>
        </i>
      </button>
    </div>
  );
}
