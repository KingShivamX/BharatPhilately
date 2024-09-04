import { Link } from 'react-router-dom'
import { Form, Input } from "antd";
import React from 'react'
import { Button } from '@/components/ui/button';

const Login = () => {
  return (
    <div className="flex items-center justify-center lg:justify-end relative min-h-screen">
      <div className="hidden lg:block">
        <div className="w-[843px] h-[843px] rounded-full bg-[#539BBB] absolute z-10 -top-[206px] -left-[342px]" />
        <div className="absolute left-[5%] top-[15%] z-10">
          <h1 className="text-[40px] w-[325px] font-medium text-white">
            Explore <br /> Collect <br /> Showcase <br /> Trade
          </h1>
        </div>
      </div>
      <div className="flex items-center justify-center md:w-[50%] flex-col bg-white p-6 lg:bg-transparent rounded-lg">
        <div className="flex items-center justify-center flex-col">
          <div className="flex items-center justify-center space-x-3">
            {/* <Logo /> */}
            <span className="text-4xl font-bold text-[#2F667F]">
              BharatPhilately
            </span>
          </div>
          <p className="text-sm text-[#2F667F]">
            Welcome back, sign in your account
          </p>
        </div>

        <Form
          layout="vertical"
          className="w-[300px] mt-6"
        >
          <Form.Item
            name="email"
            className="w-full"
            label={<span className="text-primary font-medium">Email</span>}
            rules={[
              {
                type: "email",
                message: "Email should be a valid email address",
              },
              { required: true, message: "Email should be required" },
            ]}
          >
            <Input placeholder="Enter email address" />
          </Form.Item>

          <Form.Item
            name="password"
            className="w-full"
            label={<span className="text-[#2F667F] font-medium">Password</span>}
            rules={[{ required: true, message: "Password should be required" }]}
          >
            <Input.Password placeholder="Enter password" />
          </Form.Item>

          <div className="flex items-center justify-center w-full">
            <Button
              className="w-full px-6 bg-[#2f667f] hover:bg-[#3d7e9c] ring-0 rounded-full"
              htmlType="submit"
            >
              Sign In
            </Button>
          </div>
        </Form>

        <p className="text-sm mt-4 text-center">
          Don't have an account?
          <Link
            to="/auth/register"
            className="text-[#2F667F] hover:text-[#539BBB] hover:underline pl-2 "
          >
            Sign up
          </Link>
        </p>

        <Link
          to="/auth/forgot-password"
          className="text-[#2F667F] hover:text-[#539BBB] transition mt-4 text-sm hover:underline"
        >
          Forgot password?
        </Link>
      </div>
    </div>
  )
}

export default Login