import React, { useState } from "react";
import axios from "axios";

const ListCompany = () => {
  const [dataCompany, setDataCompany] = useState([]);
  const [erroDiv, setErroDiv] = useState([null]);
  
  React.useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const data = await axios.get(
        "https://jobs.github.com/positions.json?description=api"
      );
      setDataCompany(data.data);
      console.log(data);
    } catch (error) {
      setErroDiv(errorData())
    }
  };
  console.log(dataCompany)

  const errorData = () => {
      return (
        <div className="error">
          <h3> No fue posible obtener la data</h3>
          <p>
            Verifica tener instalado el plugin de chrome Allow CORS:
            Access-Control-Allow-Origin.{" "}
          </p>
        </div>
      );
  };

  return (
    <section className="container-list">
      {erroDiv}
      {dataCompany.map((item) => (
        <div key={item.id} className="list-card">
          <div className="list-body">
            <h5>{item.title}</h5>
            <h5>{item.company}</h5>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ListCompany;

