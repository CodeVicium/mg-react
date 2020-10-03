import React from "react";
import { Form , Input, Button} from "antd";
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
  const onFinish =async (values) => {
    try {
        await axios.post("/contactForm",values);
    } catch (error) {
        console.log(error);
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
      <Form.Item
        name={ ["email"]}
        label="Email"
        rules={[{ type: "email" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={ ["contact_number "]}
        label="Numero de contacto"
      >
        <Input />
      </Form.Item>
      <Form.Item name={["message"]} label="Mensaje">
        <Input.TextArea />
      </Form.Item>
      <Form.Item className="btnEnviar" style={{width:"8rem"}}>
        <Button type="primary" style={{width:"8rem"}} htmlType="submit">
          Enviar
        </Button>
      </Form.Item>
    </Form>
  );
};
export default Contact;
