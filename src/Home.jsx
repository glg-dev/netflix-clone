import React from 'react';
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Row from "./components/Row";
import requests from "./data/requests";


const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Row title="Programmes originaux Netflix" fetchUrl={requests.fetchNetflixOriginals} isPoster={true} />
      <Row title="Les mieux notés" fetchUrl={requests.fetchTopRated} />
      <Row title="Action et aventure" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comédies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Films d'horreur" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaires" fetchUrl={requests.fetchDocumentaries} />
      <Footer />
    </div>
  );
};

export default Home;