import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;

  ul {
    display: flex;
  }

  h1 {
    margin-top: 40px;
  }

  p {
    margin-top: 10px;
    color: gray;
    font-size: 12px;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    margin-top: 50px;

    table {
      /* border: 0.5px solid #007a8d; */
      tr {
        display: flex;
      }
    }
  }
`;

export const Li = styled.li`
  list-style: none;
  font-size: 10px;
  color: ${({ active }) => (active ? '#1f2d30' : '#007a8d')};
  margin: 6px;

  :first-child {
    margin-left: 0;
  }
`;

export const Td = styled.td`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  padding: 3px 10px 3px 10px;
  border: 0.1px solid #007a8d;
  border-spacing: 0;
  color: ${({ selected }) => (selected ? '#FFF' : '#007a8d')};
  background-color: ${({ selected }) => (selected ? '#007a8d' : '#FFF')};
`;
