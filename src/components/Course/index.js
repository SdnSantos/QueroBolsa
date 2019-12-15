import React from 'react';

import { MdAddCircleOutline } from 'react-icons/md';

import { Container } from './styles';

export default function Course() {
  return (
    <Container>
      <div>
        <MdAddCircleOutline />
        <h3>Adicionar bolsa</h3>
        <p>
          Clique para adicionar bolsas de <br /> cursos do seu interesse
        </p>
      </div>
    </Container>
  );
}
