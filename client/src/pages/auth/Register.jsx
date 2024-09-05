import { Link } from 'react-router-dom'
import { Form, Input } from "antd";
import React from 'react'
import { Button } from "antd";

const Register = () => {
  return (
    <div className="flex items-center justify-center lg:justify-end relative min-h-screen">
      <div className="hidden lg:block">
        <div className="w-[843px] h-[843px] rounded-full bg-secondary absolute z-10 -top-[206px] -left-[342px]" />
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
            <span className="text-4xl font-bold text-primary">
              BharatPhilately
            </span>
          </div>
          <p className="text-sm text-primary">
            Welcome back, sign in your account
          </p>
        </div>

        <Form
          layout="vertical"
          className="w-[300px] mt-6"
        >
          <Form.Item
            name="fullName"
            className="w-full"
            label={<span className="text-primary font-medium">Full Name</span>}
            rules={[
              { required: true, message: "Full name should be required" },
            ]}
          >
            <Input placeholder="Enter full name" />
          </Form.Item>

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

          <div className="flex items-center justify-center w-full">
            <Button
              className="w-full px-6 bg-primary hover:bg-[#3d7e9c] ring-0 rounded-full"
              htmlType="submit"
            >
              Sign Up
            </Button>
          </div>
        </Form>

        <p className="text-sm mt-4 text-center">
          Already have an account?
          <Link
            to="/auth/login"
            className="text-secondary hover:text-primary hover:underline pl-2 "
          >
            Sign In
          </Link>
        </p>

        <Link
          to="/auth/forgot-password"
          className="text-primary hover:text-secondary transition mt-4 text-sm hover:underline"
        >
          Forgot password?
        </Link>
      </div>
    </div>
  )
}

export default Register