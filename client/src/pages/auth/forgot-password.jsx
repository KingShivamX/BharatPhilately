import { Form, Input } from "antd";
import React from 'react'
import { Button } from '@/components/ui/button';
import { MdKeyboardBackspace } from 'react-icons/md'
import { useNavigate } from "react-router-dom";

const ForgotPasswordPage = () => {
  const navigate = useNavigate();
  const backToSignIn = () => navigate('/auth/register');
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
        <div className="flex items-center justify-center flex-col space-y-2">
          <h1 className="text-2xl font-medium text-[#2F667F]">
            Forgot password?
          </h1>
          <p className="text-sm">
            No worries, we'll send you reset instructions
          </p>
        </div>

        <Form
          layout="vertical"
          className="w-[300px] mt-6"
        >
          <Form.Item
            name="email"
            className="w-full"
            label={<span className="text-[#2F667F] font-medium">Email</span>}
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
              type="[#2F667F]"
              className="w-full px-6 ring-0 rounded-full"
              htmlType="submit"
            >
              Reset Password
            </Button>
          </div>
        </Form>

        <button
          onClick={backToSignIn}
          className="flex items-center justify-center space-x-1 text-sm mt-4 text-center text-[#539BBB] hover:text-[#539BBB]/80 hover:underline transition-all"
        >
          <MdKeyboardBackspace />
          <span>Back to sign in</span>
        </button>
      </div>
    </div>
  )
}

export default ForgotPasswordPage