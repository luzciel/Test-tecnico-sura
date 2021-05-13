import React,  { useState} from "react";
import axios from 'axios';

const ListCompany = () => {

    const [dataCompany, setDataCompany] = useState([]);
    
  React.useEffect(() => {
      getData();
  }, []);

  const getData = async () => {
    try {
      const data = await axios.get(
        "https://jobs.github.com/positions.json?description=api"
        );
        setDataCompany(data.data)
        console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
    
    
    return (
    <section className="container-list">
              {dataCompany.map((item) => (
                <div key={item.id} className="list-card">
                  <div className="list-body">
                      <h5>{ item.title}</h5>
                      <h5>{item.company}</h5>
                  </div>
                    </div>
              ))}
    </section>
  );
};

export default ListCompany;
