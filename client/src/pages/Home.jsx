import React from "react";
import { Button, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

import Main from "../image/main1.png"

function Home () {
    
    return(
        <div style={{height: '850px'}}>
            <div style={{
                backgroundImage: `url(${Main})`, 
                height:'500px', width: '100%', 
                backgroundRepeat: 'no-repeat'
            }}>
                <Container>
                    <div>
                        <h1 className="mb-4" style={{
                                paddingTop: '10%',
                                marginLeft: '10%',
                                fontSize: '60px',
                                color: '#00ffff',
                            }}>
                            aCloud
                        </h1>
                        <h3 className="mb-4" style={{
                                marginLeft: '10%',
                                color: 'white',
                                maxWidth: '450px'
                            }}>
                            Облачное хранилище разработанное на React-Redux
                        </h3>
                    </div>
                    <div className="row" style={{
                        marginLeft: '9%',
                    }}>
                        <div className='col-xl-2 mt-3'>
                            <Nav.Link as={Link} to='/registration'>
                                <Button
                                    className="px-5 btn btn-outline-info btn-lg"
                                    variant="transparent"
                                >
                                    Начать
                                </Button>
                            </Nav.Link>
                        </div>
                        <div className='col-xl mt-3'>
                            <Nav.Link as={Link} to='/about'>
                                <Button
                                    className="px-5 btn btn-outline-light btn-lg"
                                    variant="transparent"
                                >
                                    About
                                </Button>
                            </Nav.Link>
                        </div>
                    </div>
                    <div>
                        <p className="mt-2" style={{
                            marginLeft: '10%',
                            color: 'white'
                        }}>
                            Current version: 1.0.0
                        </p>
                    </div>
                </Container>
            </div>
            <Container>
                <Container className="row">
                    <Container className="index-FeatureCard-module--cls2--2Vakg index-FeatureCard-module--cls1--JLkTf px-4 py-3 col-md-4">
                        <h2>Масштаб</h2>
                        <p>Виртуализация хранилища 
                            позволяет выбирать требуемый 
                            объем хранилища.
                        </p>
                        <p>В любое время можно увеличить 
                            либо уменьшить объем хранилища 
                            без закупок оборудования, 
                            его установки и наладки. 
                        </p>
                    </Container>
                    <Container className="index-FeatureCard-module--cls2--2Vakg index-FeatureCard-module--cls1--JLkTf px-4 py-3 col-md-4">
                        <h2>Доступность</h2>
                        <p>Облачное хранилище доступно в любое
                             время и с любого устройства 
                             (при наличии Интернета).
                        </p>
                        <p>Получать данные можно 
                            «на ходу», там, где они нужны 
                            в тот или иной момент.
                        </p>
                    </Container>
                    <Container className="index-FeatureCard-module--cls2--2Vakg index-FeatureCard-module--cls1--JLkTf px-4 py-3 col-md-4">
                    <h2>Защита данных</h2>
                        <p>Технологии, программное 
                            обеспечение и приложения, которые 
                            защитят ваши личные и 
                            профессиональные данные.
                        </p>
                        <p>Защита облачных данных 
                            обеспечивается строгими 
                            стандартами работы локальных 
                            центров хранения и обработки 
                            данных, гарантируя безопасность 
                            вашей облачной инфраструктуры.
                        </p>
                    </Container>
                </Container>
            </Container>
        </div>
    );
};

export default Home;
