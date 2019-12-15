import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { MdPersonOutline } from 'react-icons/md';
import { IoIosInformationCircleOutline } from 'react-icons/io';

import '../../styles/global';

import {
  FirstRow,
  SecondRow,
  LeftHeader,
  Contact,
  CenterHeader,
  RightHeader,
  Li,
} from './styles';

import logoQB from '../../images/logoQueroBolsa.png';

export default function Header() {
  return (
    <>
      <FirstRow>
        <LeftHeader>
          <IoIosInformationCircleOutline />
          Como funciona
          <div>
            <FaWhatsapp />
            <Contact>
              <ul>
                <li>0800 123 2222</li>
                <li>Envie mensagem ou ligue</li>
              </ul>
            </Contact>
          </div>
        </LeftHeader>
        <CenterHeader>
          <img src={logoQB} alt="logoQB" />
        </CenterHeader>
        <RightHeader>
          <div>
            Nome Sobrenome
            <MdPersonOutline />
          </div>
        </RightHeader>
      </FirstRow>
      <SecondRow>
        <div>
          <ul>
            <Li>Minha conta</Li>
            <Li>Pré-matrículas</Li>
            <Li active>Bolsas Favoritas</Li>
          </ul>
        </div>
      </SecondRow>
    </>
  );
}
