import { Button, Form, Input } from "antd";
import { Link } from "react-router-dom";
import { register } from "../calls/authCalls.js"

const onSubmit = async (values) => {
  const userData = await register(values);
  console.log(userData)
}

const Register = () => (
  <main className="auth-page">
    <section className="auth-card" aria-labelledby="register-title">
      <div className="brand-mark">BMS</div>
      <p className="eyebrow">Get started</p>
      <h1 id="register-title">Create your account</h1>
      <p className="auth-subtitle">Join us and never miss your next show.</p>

      <Form
        className="auth-form"
        name="register"
        layout="vertical"
        autoComplete="on"
        onFinish={onSubmit}
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please input your name!" }]}
        >
          <Input placeholder="Enter your full name" size="large" />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Please input your email!" },
            { type: "email", message: "Please enter a valid email!" },
          ]}
        >
          <Input placeholder="Enter your email" size="large" />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please create a password!" }]}
        >
          <Input.Password placeholder="Create a password" size="large" />
        </Form.Item>
        <Form.Item className="submit-item">
          <Button type="primary" htmlType="submit" size="large" block>
            Create account
          </Button>
        </Form.Item>
      </Form>

      <p className="auth-switch">
        Already have an account? <Link to="/login">Sign in</Link>
      </p>
    </section>
  </main>
);

export default Register;
