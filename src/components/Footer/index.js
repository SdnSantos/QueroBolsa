import React from 'react';

import { FaWhatsapp, FaComments, FaEnvelope, FaHeart } from 'react-icons/fa';

import { IoIosInformationCircleOutline } from 'react-icons/io';
import { FirstRow, SecondRow, Contact } from './styles';

export default function Footer() {
  return (
    <>
      <FirstRow>
        <div>
          <table>
            <td>
              <FaWhatsapp />
              <Contact>
                <ul>
                  <li>0800 123 2222</li>
                  <li>Seg - Sex 8h-22h</li>
                </ul>
              </Contact>
            </td>
            <td>
              <FaComments />
              <Contact>
                <ul>
                  <li>Chat ao vivo</li>
                  <li>Seg - Sex 8h-22h</li>
                </ul>
              </Contact>
            </td>
            <td>
              <FaEnvelope />
              <Contact>
                <ul>
                  <li>Mande um e-mail</li>
                  <li>Respondemos rapidinho</li>
                </ul>
              </Contact>
            </td>
            <td>
              <IoIosInformationCircleOutline />
              <Contact>
                <ul>
                  <li>Central de ajuda</li>
                  <li>Encontre todas as respostas</li>
                </ul>
              </Contact>
            </td>
          </table>
        </div>
      </FirstRow>
      <SecondRow>
        <div>
          <p>
            Feito com &nbsp; <FaHeart /> &nbsp; pela Quero Educação{' '}
          </p>
        </div>
      </SecondRow>
    </>
  );
}
