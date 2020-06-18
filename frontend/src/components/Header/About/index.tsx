import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

import matheusImg from '../../../assets/matheus.png';
import pauloImg from '../../../assets/paulo.png';

import { Container, AboutApp, Privacy, We, Devs, Dev, DevInfo } from './styles';

interface IAboutProps {
  showAbout: boolean;
}

const About: React.FC<IAboutProps> = ({ showAbout }) => {
  return (
    <Container showAbout={showAbout}>
      <AboutApp showAbout={showAbout}>
        <h1>Sobre o app</h1>
        <p>
          Codify é uma aplicação criada a partir do
          <a
            href="https://developer.spotify.com/documentation/web-api/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Spotify’s Web API
          </a>
          para coletar informações de sua conta Spotify. Não somos afiliados com
          o Spotify.
        </p>
      </AboutApp>

      <Privacy showAbout={showAbout}>
        <h3>Privacidade</h3>
        <p>
          Codify requer acesso à sua conta do Spotify mas não armazena nenhum
          dado em servidor.
        </p>
      </Privacy>

      <We showAbout={showAbout}>
        <h3>Quem somos</h3>

        <Devs showAbout={showAbout}>
          <Dev>
            <img src={matheusImg} alt="Matheus Pires" />

            <DevInfo>
              <strong>Matheus Pires</strong>
              <div>
                <a
                  href="https://github.com/MatheusPires99"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>

                <a
                  href="https://www.linkedin.com/in/matheus-pires-521271180/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                </a>
              </div>
            </DevInfo>
          </Dev>

          <Dev>
            <img src={pauloImg} alt="Matheus Pires" />

            <DevInfo>
              <strong>Paulo Henrique</strong>
              <div>
                <a
                  href="https://github.com/paulohenriquepm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>

                <a
                  href="https://www.linkedin.com/in/paulo-henrique-pereira-marques-339537195/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                </a>
              </div>
            </DevInfo>
          </Dev>
        </Devs>
      </We>
    </Container>
  );
};

export default About;
