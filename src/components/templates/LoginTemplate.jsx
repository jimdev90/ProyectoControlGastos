import React from 'react'
import styled from 'styled-components';
import { Btnsave, v } from '../../index';

export function LoginTemplate() {
  return (
    <Container imgFondo={v.imagenfondo}>
      <div className='contentCard'>
        <span className='version'>Version 1.0</span>
        <div className="contentImg">
          <img src={ v.logo } alt="" />
        </div>
        <Titulo>
          Control de Gastos
        </Titulo>
        <p className="frase">
          Toma el control de tus gastos e ingresos
        </p>
        <ContainerBtn>
          <Btnsave titulo="Iniciar con Google" icono={ <v.iconogoogle /> } bgcolor={ v.colorSecundario } />
        </ContainerBtn>
      </div>
    </Container>
  )
}

const Container = styled.div`
  background-image: url(${(props) => props.imgFondo});
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255,255,255,0.87);
  text-align: center;
  .contentCard {
    background-color: #131313;
    border-radius: 20px;
    gap: 30px;
    display: flex;
    flex-direction: column;
    margin: 20px;
    padding: 20px;
    box-shadow: 8px 5px 18px 3px rgba(0, 0, 0, 0.35);
    .version {
      color: #727272;
      text-align: start;
    }
    .contentImg{
      img{
        max-width: 60%;
        animation:flotar 1.5s ease-in-out infinite alternate;
      }
    }
    .frase{
      color: #909090;
      font-size: 1.2rem;
    }
  }
  @keyframes flotar {
    0% {
      transform: translate(0, 0px);
    }
    50% {
      transform: translate(0, 15px);
    }
    100% {
      transform: translate(0, -0px);
    }
  }
`

const Titulo = styled.span`
  font-size: 5rem;
  font-weight: 700;
`

const ContainerBtn = styled.div`
  display: flex;
  justify-content: center;
`
