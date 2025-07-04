export default function Actors({ actors }) {
  return (
    <div className="container my-5">
      <h1 className="mb-3 h4">Actors</h1>
      <div className="row g-3">
        {actors.slice(0, 12).map((actor) => (
          <div className="col-6 col-md-3 col-lg-2" key={actor.id}>
            <div className="actor-card">
              <img
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/original/${actor.profile_path}`
                    : "https://via.placeholder.com/150"
                }
                alt={actor.name}
                className="img-fluid img-thumbnail rounded shadow actor-img"
              />
              <p className="text-center mt-2 mb-0 actor-name">{actor.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
