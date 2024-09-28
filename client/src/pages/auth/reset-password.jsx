import { Button, Form, Input } from 'antd'
import React from 'react'
import { MdKeyboardBackspace } from 'react-icons/md'

const ResetPasswordPage = () => {
  return (
    <div className="flex items-center justify-center lg:justify-end relative min-h-screen">
      <div className="hidden lg:block">
        <div className="w-[843px] h-[843px] rounded-full bg-secondary absolute z-10 -top-[206px] -left-[342px]" />
        <div className="absolute left-[5%] top-[15%] z-10">
          <h1 className="text-[40px] w-[325px] font-light text-white">
            Manage Your <br /> Income <br />
            Expence <br /> Investment
          </h1>
        </div>
      </div>

      <div className="flex items-center justify-center md:w-[50%] flex-col bg-white p-6 lg:bg-transparent rounded-lg">
        <div className="flex items-center justify-center flex-col space-y-2">
          <h1 className="text-2xl font-medium text-primary">Reset Password</h1>
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
              className="w-full px-6 ring-0 rounded-full"
              htmlType="submit"
            >
              Reset Password
            </Button>
          </div>
        </Form>

        <button
          className="flex items-center justify-center space-x-1 text-sm mt-4 text-center text-secondary hover:text-secondary/80 hover:underline transition-all"
        >
          <MdKeyboardBackspace />
          <span>Back to sign in</span>
        </button>
      </div>
    </div>
  )
}

export default ResetPasswordPage