import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-basis: 4fr;

  max-width: 1000px;
  margin: 0 auto;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-basis: 1fr;

    margin-top: 50px;
    margin-bottom: 200px;
    box-shadow: 0.1px 0.1px 3px gray;

    svg {
      margin-top: 100px;
      color: #18acc4;
      width: 45px;
      height: 45px;
      cursor: pointer;
    }

    h3 {
      margin-top: 35px;
    }

    p {
      text-align: center;
      margin: 5px 30px 90px 30px;
      font-size: 10px;
      color: gray;
    }
  }
`;

export const ModalContainer = styled.div`
  height: 100vh;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2000;

  display: flex;

  /* display: ${({ show }) => (show ? 'flex' : 'none')}; */

  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  max-width: 600px;
  margin: 80px auto;

  background-color: #fff;
  position: relative;

  section {
    margin: 40px;
    min-width: 520px;

    table {
      tr {
        display: flex;

        margin-top: 50px;

        td {
          height: 100%;

          h4 {
            color: #007a8d;
          }

          h5 {
            margin: 0 0 10px 0;
          }

          img {
            height: 50px;
            width: 80px;
          }
        }
      }
    }
  }

  h3 {
    font-weight: bold;
  }

  h5 {
    font-size: 16px;
  }

  table {
    width: 100%;

    tr {
      display: flex;
      align-items: center;
      justify-content: space-between;

      td {
        height: 100%;
        margin-right: 35px;

        svg {
          color: #fff;
          border: 1px solid gray;
          width: 15px;
          height: 15px;
        }
      }
    }
  }
`;

export const TextV = styled.text`
  color: green;
  font-size: 14px;
  font-weight: bold;
`;

export const LeftTable = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const RightTable = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const ButtonX = styled.h2`
  font-size: 30px;
  font-weight: bold;
  position: absolute;
  top: -60px;
  right: 0;
  color: #fff;
  cursor: pointer;
`;

export const Param = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const OptionLeft = styled.div`
  font-size: 15px;
  margin-left: 5px;

  p {
    font-size: 12px;
    font-weight: bold;
    margin: 0;
  }

  select {
    width: 100%;
    height: 30px;
    background-color: #fff;
    border: 1px solid gray;
    border-radius: 3px;
    margin-bottom: 30px;
  }
`;

export const OptionRight = styled.div`
  p {
    font-size: 12px;
    font-weight: bold;
    margin: 0;
  }

  select {
    width: 100%;
    height: 30px;
    background-color: #fff;
    border: 1px solid gray;
    border-radius: 3px;
    margin-bottom: 30px;
  }

  text {
    margin-bottom: 20px;
  }

  span {
    display: flex;
    flex-direction: column;
  }
`;

export const Select = styled.div`
  margin: 20px auto;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  svg {
    margin-right: 5px;
    width: 20px;
    height: 20px;
    color: #18acc4;
  }
`;

export const Order = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  margin-top: 50px;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  h5 {
    font-weight: bold;
    margin: 0;
    color: gray;
  }

  select {
    border: none;
    background-color: #fff;
    color: #007a8d;
    font-size: 16px;
    font-weight: bold;
    margin-left: 10px;
  }
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  width: 100%;
  margin-top: 50px;
`;

export const Button = styled.button`
  width: auto;
  height: 50px;
  margin-left: 30px;
  padding: 0 15px;
  color: #007a8d;
  border: 1px solid #007a8d;
  border-radius: 3px;
  background-color: #fff;
  font-weight: bold;
`;

export const ColumnCourse = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ColumnPrice = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Slider = styled.span`
  width: 100px;
`;
