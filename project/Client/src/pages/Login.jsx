import { Button, Checkbox, Form, Input } from "antd";
import { Link } from "react-router-dom";

const onSubmit = (values) => {
  console.log(values);
};

const Login = () => (
  <main className="auth-page">
    <section className="auth-card" aria-labelledby="login-title">
      <div className="brand-mark">BMS</div>
      <p className="eyebrow">Welcome back</p>
      <h1 id="login-title">Sign in to your account</h1>
      <p className="auth-subtitle">Book your next unforgettable show.</p>

      <Form
        className="auth-form"
        name="login"
        layout="vertical"
        initialValues={{ remember: true }}
        autoComplete="on"
        onFinish={onSubmit}
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please enter your email!" }]}
        >
          <Input placeholder="Enter your username" size="large" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password placeholder="Enter your password" size="large" />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          className="remember-item"
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item className="submit-item">
          <Button type="primary" htmlType="submit" size="large" block>
            Sign in
          </Button>
        </Form.Item>
      </Form>

      <p className="auth-switch">
        New to Book My Show? <Link to="/register">Create an account</Link>
      </p>
    </section>
  </main>
);

export default Login;
