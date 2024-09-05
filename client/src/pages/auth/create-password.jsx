import { Button } from "antd";
import { Form, Input } from "antd";
import React from 'react'

const CreatePasswordPage = () => {
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
        <div className="flex items-center justify-center flex-col space-y-2">
          <h1 className="text-2xl font-medium text-primary">Create Password</h1>
        </div>

        <Form
          layout="vertical"
          className="w-[300px] mt-6"
        >
          <Form.Item
            name="password"
            label={<span className="text-primary font-medium">Password</span>}
            rules={[
              { required: true, message: "Password should be required" },
              { min: 8, message: "Password must be at least 8 characters" },
            ]}
          >
            <Input.Password placeholder="Enter plassword" />
          </Form.Item>

          <Form.Item
            name="confirmPassword"
            label={
              <span className="text-primary font-medium">Confirm Password</span>
            }
            rules={[
              { required: true, message: "Password should be required" },
              { min: 8, message: "Password must be at least 8 characters" },
            ]}
          >
            <Input.Password placeholder="Enter plassword" />
          </Form.Item>

          <div className="flex items-center justify-center w-full">
            <Button
              type="primary"
              className="w-full px-6 bg-primary hover:bg-[#3d7e9c] ring-0 rounded-full"
              htmlType="submit"
            >
              Create Password
            </Button>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default CreatePasswordPage