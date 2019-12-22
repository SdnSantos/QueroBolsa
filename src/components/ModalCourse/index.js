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
  Presential,
  Distance,
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
  const [presential, setPresential] = useState(false);
  const [distance, setDistance] = useState(false);
  const [value, setValue] = useState(10000);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = () => setShow(true);

  useEffect(() => {
    async function loadData() {
      const dataApi = await api.get();

      setData(dataApi.data);
    }

    loadData();
  }, []);

  useEffect(() => {
    console.tron.log(data);

    async function loadCities() {
      setCities(data.map(c => c.campus.city));
    }

    async function loadCourses() {
      setCourses(data.map(c => c.course.name));
    }

    loadCities();
    loadCourses();
  }, [data]);

  function filterCities() {
    const newArr = [];

    for (let index = 0; index < cities.length; index++) {
      if (newArr.indexOf(cities[index]) === -1) {
        newArr.push(cities[index]);
      }
    }
    return newArr;
  }

  function filterCourses() {
    const newArr = [];

    for (let index = 0; index < courses.length; index++) {
      if (newArr.indexOf(courses[index]) === -1) {
        newArr.push(courses[index]);
      }
    }
    return newArr;
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
                  {filterCities()
                    .sort()
                    .map(c => (
                      <option value={c}>{c}</option>
                    ))}
                </select>
                <p>COMO VOCÊ QUER ESTUDAR?</p>
                <Select>
                  <Presential onClick={() => setPresential(!presential)}>
                    {presential ? <FaCheckSquare /> : <FaSquare />} Presencial
                  </Presential>
                  <Distance onClick={() => setDistance(!distance)}>
                    {distance ? <FaCheckSquare /> : <FaSquare />} A distância
                  </Distance>
                </Select>
              </OptionLeft>
              <OptionRight>
                <p>SELECIONE O CURSO DE SUA PREFERÊNCIA</p>
                <select id="courses">
                  <option value="">Selecione</option>
                  {filterCourses()
                    .sort()
                    .map(c => (
                      <option value={c}>{c}</option>
                    ))}
                </select>
                <p>ATÉ QUANTO PODE PAGAR?</p>
                <span>
                  <text>
                    {value.toLocaleString('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    })}
                  </text>
                  <Slider
                    min={0}
                    max={10000}
                    defaultValue={value}
                    onChange={handleChange}
                    step={1000}
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
