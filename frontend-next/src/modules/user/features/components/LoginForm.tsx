import React, {useState} from "react";
import {Form, Button, Input} from 'antd';

interface LoginFormProps {
    handleLogin: Function
}

const LoginForm: React.FC<LoginFormProps> = (props: LoginFormProps) => {
    const [form] = Form.useForm();
    const { handleLogin } = props;

    const [inputValues, setInputValues] = useState({
        email: '', password: ''
    });

    function handleInputChange(evt: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = evt.target;
        setInputValues({ ...inputValues, [name]: value });
    }

    const handleSubmit = () => {
        if (handleLogin) {
            handleLogin({
                email: inputValues?.email,
                password: inputValues?.password
            })
        }
    };

    return (
        <Form form={form} layout="inline" autoComplete="off" onFinish={handleSubmit}>
            <Form.Item>
                <Input
                    required
                    name="email"
                    placeholder="Email"
                    onChange={handleInputChange}
                    rules={[
                        {
                            type: 'email',
                            message: 'Please enter correct email format!',
                        },
                        {
                            required: true,
                            message: 'Email is required!',
                        },
                    ]}
                />
            </Form.Item>
            <Form.Item>
                <Input
                    required
                    name="password"
                    type="password"
                    placeholder="Password"
                    onChange={handleInputChange}
                    rules={[
                        {
                            required: true,
                            message: 'Password is required!',
                        },
                    ]}
                />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Login / Register
                </Button>
            </Form.Item>
        </Form>
    );
};

export default LoginForm;