import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import Input from "../utils/Input";
import { useDispatch } from "react-redux";
import { login } from "../actions/user";

import Logo from "../image/logo.png"

function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()

    return(
        <Container>
            <Container className='row' style={{textAlign: 'center', marginLeft: '0.1%'}}>
                <Container className='col-lg-5' 
                    style={{
                            maxWidth: '500px', 
                            minHeight: '100px',
                            borderRadius: '7px',
                            marginTop: '50px',
                            paddingTop: '5%'
                        }}
                >
                    <h1>Вход в aCloud</h1>
                    <p>Облачное хранилище разработанное на React-Redux</p>
                    <img 
                        src={Logo}
                        height="100"
                        className="d-inline-block alight-top"
                        alt="Logo"
                    />
                </Container>
                <Container className='col-lg-5' 
                    style={{
                            maxWidth: '500px', 
                            minHeight: '290px', 
                            background: 'linear-gradient(90deg, rgba(108,243,255,0.22032563025210083) 7%, rgba(0,71,255,0.23153011204481788) 94%)', 
                            paddingTop: '40px', 
                            paddingBottom: '40px', 
                            marginTop: '50px',
                            marginBottom: '50px',
                            borderRadius: '7px',
                            //border: '1px solid aquamarine',
                        }}
                >
                    <Form className="authorization">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className="mb-4 authorization__header" style={{fontWeight: 'bold', fontSize: '19px'}}>Авторизация</Form.Label>
                            <Input 
                                required 
                                value={email}
                                setValue={setEmail}
                                type="email" 
                                placeholder="Email" 
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Input 
                                required 
                                value={password}
                                setValue={setPassword}
                                type="password" 
                                placeholder="Пароль" 
                            />
                        </Form.Group>
                        <Button className="mb-3 authorization__btn" 
                            variant="dark" 
                            onClick={() => dispatch(login(email, password))}
                        >
                            Войти
                        </Button>
                        <Form.Group>
                        <span>У вас нет аккаунта? <Link to="/registration">Регистрация</Link></span>
                        </Form.Group>
                    </Form>
                </Container>
            </Container>
        </Container>
    );
};

export default Login;