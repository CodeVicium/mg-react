import React, { useEffect, useState } from "react";
import { Card, Typography } from "antd";
import axios from "util/Api";
import moment from "moment";
const { Title } = Typography;
const Admin = () => {
  const [data, setData] = useState(null);
  const fetch = async () => {
    await axios
      .get("/contactForm", {})
      .then((response) => {
        console.log(response,"response");
        let newData = response.data.data;
        let mapDataToRutine=[]
        newData.forEach(e => {
          console.log(e,"element");
          let fecha = moment(e.time);
          let hora = `${fecha.hours()}:${fecha.minutes()}`
          fecha = `${fecha.day()}/${fecha.month()}/${fecha.year()}`
          mapDataToRutine.push({...e,fecha,hora})
        });
        // let fecha = moment(newData.time);
        setData(mapDataToRutine);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(() => {
    fetch();
  }, []);
 console.log(data,"data Reponse")
  return (
    <div>
      <Title type="success">Pagina del administrador</Title>
      <div className="patternMessage">
        {data && data.map((e) => {
          console.log(e,"element");
          return (<Card className="cardMessage" key={e._id} title={e.name}>
            Telefono: {e.contact_number}<br/>
            E-mail: {e.email}<br/>
            Fecha: {e.fecha}<br/>
            Hora: {e.hora}<br/>
            Mensaje: {e.message}<br/>
            </Card>);
        })}
      </div>
    </div>
  );
};

export default Admin;
