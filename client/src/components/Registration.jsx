import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { registration } from "../actions/user";
import Input from "../utils/Input";

import Logo from "../image/logo.png"

function Registration() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return(
        <div>
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
                        <h1>Регистрация в aCloud</h1>
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
                        }}>
                        <Form className="authorization">
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label className="mb-4 authorization__header" style={{fontWeight: 'bold', fontSize: '19px'}}>Регистрация</Form.Label>
                                <Input 
                                    value={email} 
                                    setValue={setEmail}
                                    required type="email" 
                                    placeholder="Email" 
                                />
                                <Form.Text className="text-muted">
                                    Мы никогда не поделимся вашей электронной почтой с кем-либо еще.
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Input 
                                    value={password} 
                                    setValue={setPassword}
                                    required type="password" 
                                    placeholder="Пароль" 
                                />
                                <Form.Text className="text-muted">
                                Пароль должен состоять из 8-12 символов.
                                </Form.Text>
                            </Form.Group>
                            <Button
                                className="mb-2 authorization__btn" 
                                variant="dark" 
                                onClick={() => registration(email, password)}
                            >
                                Подтвердить
                            </Button>
                            <Form.Group>
                                <span>Если вы уже зарегестрированы - нажмите <Link to="/login">сюда</Link></span>
                            </Form.Group>
                        </Form>
                    </Container>
                </Container>
            </Container>
        </div>
    );
};

export default Registration;