import React, { useState } from "react";
import { Form, Input, Button, notification } from "antd";
import axios from "util/Api";
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const validateMessages = {
  required: "${label} es requerido!",
  types: {
    email: "${label} tiene que ser de tipo email!",
  },
};

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const onFinish = async (values) => {
    setLoading(true);
    try {
      await axios.post("/contactForm", values);
      notification["success"]({
        message: 'Su mensaje fue enviado con exito',
        description:
          'Su mensaje fue enviado a nuestros servidores en breve nos estaremos conmunicando con mas informacion.',
      });
      setLoading(false);
    } catch (error) {
      console.log(error);
      notification["error"]({
        message: 'Hubo un error al enviar su mensaje por favor reintentelo mas tarde',
        description:
          'Su mensaje no pude ser enviado correctamente.',
      });
      setLoading(false);
    }
  };
  return (
    <Form
      {...layout}
      className=""
      name="contactForm"
      onFinish={onFinish}
      validateMessages={validateMessages}
    >
      <Form.Item
        name={["name"]}
        label="Nombre y apellido"
        rules={[{ required: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item name={["email"]} label="Email" rules={[{ type: "email" }]}>
        <Input />
      </Form.Item>
      <Form.Item name={["contact_number "]} label="Numero de contacto">
        <Input />
      </Form.Item>
      <Form.Item name={["message"]} label="Mensaje">
        <Input.TextArea />
      </Form.Item>
      <Form.Item className="btnEnviar" style={{ width: "8rem" }}>
        <Button loading={loading} type="primary" style={{ width: "8rem" }} htmlType="submit">
          Enviar
        </Button>
      </Form.Item>
    </Form>
  );
};
export default Contact;
