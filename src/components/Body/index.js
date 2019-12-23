/* eslint-disable no-const-assign */
/* eslint-disable no-return-assign */
import React, { useState } from 'react';

import '../../styles/global';

import { Container, Li, Td } from './styles';

export default function Body() {
  const [allSemester, setAllSemester] = useState(false);
  const [firstSemester, setFirstSemester] = useState(false);
  const [secondSemester, setSecondSemester] = useState(false);

  // function handleSelect() {
  //   console.tron.log(allSemester);
  //   console.tron.log(firstSemester);
  //   console.tron.log(secondSemester);

  //   if (allSemester === true) {
  //     setAllSemester(true);
  //     setFirstSemester(false);
  //     setSecondSemester(false);
  //   } else if (firstSemester === true) {
  //     setAllSemester(false);
  //     setFirstSemester(true);
  //     setSecondSemester(false);
  //   } else {
  //     setAllSemester(false);
  //     setFirstSemester(false);
  //     setSecondSemester(true);
  //   }
  // }

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
            <Td
              onClick={() => setAllSemester(!allSemester)}
              selected={allSemester}
            >
              Todos os semestres
            </Td>
            <Td
              onClick={() => setSecondSemester(!secondSemester)}
              selected={secondSemester}
            >
              2º semestre de 2019
            </Td>
            <Td
              onClick={() => setFirstSemester(!firstSemester)}
              selected={firstSemester}
            >
              1º semestre de 2020
            </Td>
          </tr>
        </table>
      </div>
    </Container>
  );
}
