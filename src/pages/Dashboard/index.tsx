import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no github</Title>

      <Form action="">
        <input type="text" placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="/">
          <img
            src="https://avatars3.githubusercontent.com/u/20937753?s=460&u=1920f44394994ec9e0603aa36987bfa99242a242&v=4"
            alt="João Vítor"
          />

          <div>
            <strong>joaovitormarquim/adonis_tutorial</strong>
            <p>
              Help people interested in this repository understand your project
              by adding a README.
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="/">
          <img
            src="https://avatars3.githubusercontent.com/u/20937753?s=460&u=1920f44394994ec9e0603aa36987bfa99242a242&v=4"
            alt="João Vítor"
          />

          <div>
            <strong>joaovitormarquim/adonis_tutorial</strong>
            <p>
              Help people interested in this repository understand your project
              by adding a README.
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="/">
          <img
            src="https://avatars3.githubusercontent.com/u/20937753?s=460&u=1920f44394994ec9e0603aa36987bfa99242a242&v=4"
            alt="João Vítor"
          />

          <div>
            <strong>joaovitormarquim/adonis_tutorial</strong>
            <p>
              Help people interested in this repository understand your project
              by adding a README.
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="/">
          <img
            src="https://avatars3.githubusercontent.com/u/20937753?s=460&u=1920f44394994ec9e0603aa36987bfa99242a242&v=4"
            alt="João Vítor"
          />

          <div>
            <strong>joaovitormarquim/adonis_tutorial</strong>
            <p>
              Help people interested in this repository understand your project
              by adding a README.
            </p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
