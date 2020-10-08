import React, { useEffect, useState } from "react";
import { Card, Typography, Button, notification } from "antd";
import axios from "util/Api";
import moment from "moment";
const { Title } = Typography;
const Admin = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const fetch = async () => {
    await axios
      .get("/contactForm", {})
      .then((response) => {
        let newData = response.data.data;
        let mapDataToRutine = [];
        newData.forEach((e) => {
          let fecha = moment(e.time);
          let hora = `${fecha.hours()}:${fecha.minutes()}`;
          fecha = `${fecha.day()}/${fecha.month()}/${fecha.year()}`;
          mapDataToRutine.push({ ...e, fecha, hora });
        });
        setData(mapDataToRutine);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(() => {
    fetch();
  }, []);

  const deleteCard = async (id) => {
    setLoading(id);
    await axios
      .delete(`/contactForm/${id}`)
      .then((response) => {
        notification["success"]({
          message: "Su mensaje fue borrado con exito",
          description: `El mensaje con el id ${id} fue borrado con exito`,
        });
      })
      .catch(function (error) {
        notification["error"]({
          message: "Su mensaje no pudo ser borrado",
          description: `El mensaje con el id ${id} no pudo ser borrado intentelo de nuevo mas tarde`,
        });
      });
    setLoading(null);
    fetch()
  };
  return (
    <div>
      <Title type="success">Pagina del administrador</Title>
      <div className="patternMessage">
        {data &&
          data.map((e) => {
            return (
              <Card
                className="cardMessage"
                key={e._id}
                title={
                  <div>
                    {e.name}
                    <Button
                      onClick={() => deleteCard(e._id)}
                      className="btnDelete"
                      loading={loading?e._id===loading:false}
                      danger
                    >
                      Eliminar
                    </Button>
                  </div>
                }
              >
                Telefono: {e.contact_number}
                <br />
                E-mail: {e.email}
                <br />
                Fecha: {e.fecha}
                <br />
                Hora: {e.hora}
                <br />
                Mensaje: {e.message}
                <br />
              </Card>
            );
          })}
      </div>
    </div>
  );
};

export default Admin;
