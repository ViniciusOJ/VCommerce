import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import NavMobile from "../../components/NavMobile/NavMobile";
import api from "../../services/api";

function Home() {
  const [stock, setStock] = useState([]);
  useEffect(() => {
    async function products() {
      await api
        .get("/products")
        .then((response) => setStock(response.data))
        .catch((error) => console.log(error));
    }

    products();
  }, []);

  console.log(stock);

  return (
    <>
      <Navbar />
      <NavMobile />
    </>
  );
}

export default Home;
