import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <section className="home">
      <Link to="/ListCompany">
        <button> Botón </button>
      </Link>
    </section>
  );
};

export default Home;
