// import React from "react";
// import { Button, Input, Form, Typography,Divider } from "antd";
// import './LoginStyle.css';

// export default function Login() {
//   return (
//     <div className="AppBg">
//       <form className="lognForm">
//         <Typography.Title>Welcome Back</Typography.Title>
//         <Form.Item label="email" name={"myEmail"}>
//           <Input  placeholder="Enter your email"></Input>
//         </Form.Item>
//         <Form.Item label="password" name={"myPassword"}>
//           <Input placeholder="Enter your password"></Input>
//         </Form.Item>
//         <Button type="primary" htmlType="submit" block> Login</Button>
//         <Divider style={{borderColor: "black"}}> or login with</Divider>
//       </form>
//     </div>
//   );
// }
import "./LoginStyle.css";
import { Form, Input, Button ,Typography} from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

const Login = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <div className="AppBg">

    <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      >
        <Typography.Title style={{ display: "flex", justifyContent: "center" }}>Welcome</Typography.Title>

      <Form.Item
        name="myEmail"
        rules={[{ required: true, message: "Please input your Email!" }]}
      >
        <Input
          prefix={<UserOutlined />}
          placeholder="Email"
          size="large"
          style={{ borderRadius: "5px" }}
        />
      </Form.Item>
      <Form.Item
        name="myPassword"
        rules={[{ required: true, message: "Please input your Password!" }]}
      >
        <Input
          prefix={<LockOutlined />}
          type="password"
          placeholder="Password"
          size="large"
          style={{ borderRadius: "5px" }}
          />
      </Form.Item>
      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className="login-form-button"
          size="large"
          style={{ borderRadius: "5px" }}
          >
          Log in
        </Button>
      </Form.Item>
    </Form>
            </div>
  );
};

export default Login;
