import styled from 'styled-components';

export const FirstRow = styled.div`
  background-color: #007a8d;

  div {
    max-width: 1000px;
    margin: 0 auto;
    height: 90px;
    color: #fff;
    font-size: 14px;
    font-style: bold;

    table {
      display: flex;
      align-items: center;
      justify-content: space-between;

      td {
        display: flex;
        align-items: center;
        justify-content: center;
      }

      svg {
        height: 55px;
        width: 55px;
        padding-left: 20px;
      }

      ul {
        display: flex;
        flex-direction: column;

        list-style: none;

        li {
          display: flex;
          align-items: center;
          font-size: 11px;
          font-weight: bold;
          padding: 3px 10px 3px 10px;
        }

        li:first-child {
          font-weight: bold;
          font-size: 14px;
        }
      }
    }
  }
`;

export const Contact = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const SecondRow = styled.div`
  background-color: #18acc4;

  div {
    display: flex;
    align-items: center;
    justify-content: center;

    max-width: 1000px;
    margin: 0 auto;
    height: 90px;
    color: #fff;
    font-size: 14px;
    font-style: bold;

    p {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;
