/* eslint-disable no-undef */
/* eslint-disable no-plusplus */
import React, { useState, useEffect } from 'react';

import { Slider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { MdAddCircleOutline } from 'react-icons/md';
import { FaCheckSquare, FaSquare } from 'react-icons/fa';

import api from '../../services/api';

import {
  Container,
  ModalContainer,
  Content,
  Param,
  OptionLeft,
  Select,
  OptionRight,
  ButtonX,
  Button,
  Order,
  Buttons,
  ColumnCourse,
  ColumnPrice,
  LeftTable,
  RightTable,
  TextV,
} from './styles';

const useStyles = makeStyles({
  input: {
    width: 250,
    padding: 0,
    color: '#18acc4',
  },
});

export default function ModalCourse() {
  const classes = useStyles();

  const [data, setData] = useState([]);
  const [cities, setCities] = useState({});
  const [courses, setCourses] = useState({});

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);

  useEffect(() => {
    async function loadData() {
      const data = await api.get();

      setData(data.data);
    }

    loadData();
  }, []);

  useEffect(() => {
    async function loadCities() {
      setCities(data.map(c => c.campus.city));
    }

    async function loadCourses() {
      setCourses(data.map(c => c.course.name));
    }

    loadCities();
    loadCourses();
  }, [data]);

  console.tron.log(cities);
  console.tron.log(courses);

  return (
    <>
      <Container>
        <div>
          <MdAddCircleOutline onClick={handleShow} />
          <h3>Adicionar bolsa</h3>
          <p>
            Clique para adicionar bolsas de <br /> cursos do seu interesse
          </p>
        </div>
      </Container>
      <ModalContainer show={show} onHide={handleClose}>
        <Content>
          <section>
            <ButtonX onClick={handleClose}>x</ButtonX>
            <h3>Adicionar bolsa</h3>
            <h5>Filtre e adicione as bolsas de seu interesse.</h5>
            <Param>
              <OptionLeft>
                <p>SELECIONE SUA CIDADE</p>
                <select name="cities">
                  <option value="Selecione">Selecione</option>
                  {data.map(c => (
                    <option value={c.campus.city}>{c.campus.city}</option>
                  ))}
                </select>
                <p>COMO VOCÊ QUER ESTUDAR?</p>
                <Select>
                  <FaCheckSquare /> Presencial
                  <FaCheckSquare /> A distância
                </Select>
              </OptionLeft>
              <OptionRight>
                <p>SELECIONE O CURSO DE SUA PREFERÊNCIA</p>
                <select id="courses">
                  <option value="">Selecione</option>
                  {data.map(d => (
                    <option value={d.course.name}>{d.course.name}</option>
                  ))}
                </select>
                <p>COMO VOCÊ QUER ESTUDAR?</p>
                <span>
                  <text>R$10.000</text>
                  <Slider
                    min={0}
                    max={10000}
                    defaultValue={10000}
                    step={1000}
                    valueLabelDisplay="on"
                    className={classes.input}
                  />
                </span>
              </OptionRight>
            </Param>

            <Order>
              <h5>Resultado:</h5>
              <div>
                <h5>Ordenar por</h5>
                <select name="ordenar" id="ordenar">
                  <option value="Selecione">Selecione</option>
                  <option value="nomeFacul">Nome da Faculdade</option>
                  <option value="curso">Curso</option>
                  <option value="preco">Preço</option>
                </select>
              </div>
            </Order>

            <table>
              <tr>
                <LeftTable>
                  <td>
                    <FaSquare />
                  </td>
                  <td>
                    <img
                      src="https://www.tryimg.com/u/2019/04/16/anhanguera.png"
                      alt="Anhanguera"
                    />
                  </td>
                  <td>
                    <ColumnCourse>
                      <h4>Administração</h4>
                      <h5>Bacharelado</h5>
                    </ColumnCourse>
                  </td>
                </LeftTable>
                <RightTable>
                  <td>
                    <ColumnPrice>
                      <text>
                        Bolsa de <TextV>50%</TextV>{' '}
                      </text>
                      <TextV>R$ 374/mês</TextV>
                    </ColumnPrice>
                  </td>
                </RightTable>
              </tr>
            </table>

            <Buttons>
              <Button type="submit" onClick={handleClose}>
                Cancelar
              </Button>
              <Button type="submit" onClick={handleClose}>
                Adicionar bolsa(s)
              </Button>
            </Buttons>
          </section>
        </Content>
      </ModalContainer>
    </>
  );
}
