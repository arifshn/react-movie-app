import React from "react";
import { NavLink } from "react-router";
import SearchForm from "../components/SearchForm";
import Movies from "./Movies";

const Home = () => {
  return (
    <>
      <div id="home">
        <div className="img-overplay">
          <div className="container pt-5">
            <div className="col-12 col-lg-7 mx-auto-text-center text-white">
              <h1 className="display-2">Hoşgeldiniz</h1>
              <p className="lead">
                Keşfedilecek milyonlarca film , TV şovu ve kişi . Şimdi keşfedin
              </p>
              <SearchForm />
            </div>
          </div>
        </div>
      </div>
      <Movies />
    </>
  );
};

export default Home;
