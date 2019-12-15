import React from 'react';

import '../../styles/global';

import { Container, Li, Td } from './styles';

export default function Body() {
  return (
    <Container>
      <ul>
        <Li>Home</Li>
        <Li>/</Li>
        <Li>Minha conta</Li>
        <Li>/</Li>
        <Li active>Bolsas Favoritas</Li>
      </ul>
      <h1>Bolsas favoritas</h1>
      <p>
        Adicione bolsas de cursos e faculdades do seu interesse e receba
        atualizações com as melhores ofertas disponíveis.
      </p>
      <div>
        <table>
          <tr>
            <Td selected>Todos os semestres</Td>
            <Td>2º semestre de 2019</Td>
            <Td>1º semestre de 2020</Td>
          </tr>
        </table>
      </div>
    </Container>
  );
}
