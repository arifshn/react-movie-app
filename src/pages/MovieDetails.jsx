import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";
import SimilarMovies from "./SimilarMovies";
const apiUrl = "https://api.themoviedb.org/3";
const api_key = "72ce9793bea613d160578c8758d78473";
const language = "tr-TR";

const MovieDetails = () => {
  const { id } = useParams();

  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function getMovie() {
      try {
        const response = await fetch(
          `${apiUrl}/movie/${id}?api_key=${api_key}&language=${language}&append_to_response=credits`
        );

        if (!response.ok) {
          throw new Error("Hata oluştu");
        }

        const data = await response.json();
        setMovie(data);
        setError("");
      } catch (error) {
        setError(error.message);
      }

      setLoading(false);
    }

    getMovie();
  }, [id]);

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <>
      <div
        className="text-white position-relative"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "100vh",
        }}
      >
        <div className="img-overlay">
          <div className="container d-flex align-items-center justify-content-center min-vh-100">
            <div className="row align-items-center">
              <div className="col-lg-4 d-none d-lg-block">
                <img
                  src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                  alt={movie.title}
                  className="img-fluid rounded shadow img-thumbnail poster-img"
                />
              </div>
              <div className="col-lg-8">
                <h1 className="display-3 fw-bold mb-3">{movie.title}</h1>
                <div className="d-flex flex-wrap align-items-center mb-3 movie-info">
                  <span>{movie.release_date}</span>
                  <i className="bi bi-dot mx-2"></i>
                  <span>
                    {movie.genres.map((genre) => genre.name).join(", ")}
                  </span>
                  <i className="bi bi-dot mx-2"></i>
                  <span>{movie.runtime} dk</span>
                </div>
                <p>
                  <span className="badge bg-warning text-dark fw-bold fs-6">
                    {Math.round(movie.vote_average * 10)}%
                  </span>
                </p>
                {movie.overview && (
                  <p className="lead mt-4 overview-text">
                    <strong>Özet:</strong> {movie.overview}
                  </p>
                )}
                <div className="d-flex flex-column flex-md-row gap-4 mt-4 crew-info">
                  <div className="text-center">
                    <span className="d-block fw-semibold">Yapımcı</span>
                    <span>
                      {movie.production_companies[0]?.name || "Bilinmiyor"}
                    </span>
                  </div>
                  <div className="text-center">
                    <span className="d-block fw-semibold">Yönetmen</span>
                    <span>{movie.credits.crew[0]?.name || "Bilinmiyor"}</span>
                  </div>
                  <div className="text-center">
                    <span className="d-block fw-semibold">Senarist</span>
                    <span>{movie.credits.crew[1]?.name || "Bilinmiyor"}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container my-5">
        <div className="card border-0 shadow-sm">
          <div className="card-header bg-primary text-white">
            <h5 className="card-title mb-0">Kadro</h5>
          </div>
          <div className="card-body">
            <div className="row g-3">
              {movie.credits.cast.slice(0, 12).map((actor) => (
                <div className="col-6 col-md-3 col-lg-2" key={actor.id}>
                  <div className="actor-card">
                    <img
                      src={
                        actor.profile_path
                          ? `https://image.tmdb.org/t/p/original/${actor.profile_path}`
                          : "https://via.placeholder.com/150"
                      }
                      alt={actor.name}
                      className="img-fluid rounded actor-img"
                    />
                    <p className="text-center mt-2 mb-0 actor-name">
                      {actor.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <SimilarMovies movieId={id} />
    </>
  );
};
export default MovieDetails;
