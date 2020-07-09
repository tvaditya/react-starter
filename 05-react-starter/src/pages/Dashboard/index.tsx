import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FunctionComponent = () => {
    return(
        <>
            <img src={logoImg} alt="Github Explorer"/>
            <Title>Explore Github Repositories</Title>

            <Form>
                <input type="text" placeholder="Type here!"></input>
                <button type="submit">Search</button>
            </Form>

            <Repositories>
                <a href="teste">
                   <img
                    src="https://avatars0.githubusercontent.com/u/7970625?s=460&u=834888d96594cc08405b143d618a31073070a187&v=4"
                    alt="Tantravahi Aditya"></img>
                    <div>
                        <strong>tvaditya/react</strong>
                        <p>Easy ReactJS for all</p>    
                    </div>
                    <FiChevronRight size={20}/> 
                </a>
                <a href="teste">
                   <img
                    src="https://avatars0.githubusercontent.com/u/7970625?s=460&u=834888d96594cc08405b143d618a31073070a187&v=4"
                    alt="Tantravahi Aditya"></img>
                    <div>
                        <strong>tvaditya/react</strong>
                        <p>Easy ReactJS for all</p>    
                    </div>
                    <FiChevronRight size={20}/> 
                </a> 
                <a href="teste">
                   <img
                    src="https://avatars0.githubusercontent.com/u/7970625?s=460&u=834888d96594cc08405b143d618a31073070a187&v=4"
                    alt="Tantravahi Aditya"></img>
                    <div>
                        <strong>tvaditya/react</strong>
                        <p>Easy ReactJS for all</p>    
                    </div>
                    <FiChevronRight size={20}/> 
                </a> 
                <a href="teste">
                   <img
                    src="https://avatars0.githubusercontent.com/u/7970625?s=460&u=834888d96594cc08405b143d618a31073070a187&v=4"
                    alt="Tantravahi Aditya"></img>
                    <div>
                        <strong>tvaditya/react</strong>
                        <p>Easy ReactJS for all</p>    
                    </div>
                    <FiChevronRight size={20}/> 
                </a>   
            </Repositories>
        </>
    );
};

export default Dashboard;