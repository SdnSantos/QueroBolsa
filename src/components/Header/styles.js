import styled from 'styled-components';

export const FirstRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  max-width: 1000px;
  margin: 0 auto;
  height: 60px;
  color: #007a8d;
  font-weight: bold;

  svg {
    height: 32px;
    width: 32px;
    margin-right: 5px;
  }
`;

export const LeftHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 12px;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    border-left: 20px;

    svg {
      color: #27ae60;
      height: 25px;
      width: 25px;
      margin-left: 40px;
    }

    ul {
      list-style: none;
      font-weight: normal;

      ::first-line {
        font-weight: bold;
        font-size: 14px;
        color: #007a8d;
      }

      li {
        font-size: 10px;
        margin: 5px;
      }
    }
  }
`;

export const Contact = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const CenterHeader = styled.div`
  img {
    height: 50px;
  }
`;

export const RightHeader = styled.div`
color: #18acc4;
font-size: 12px;
font-weight: bold;

    div {
    display: flex;
    align-items: center;
    justify-content: center;

      svg {
        height: 20px;
        width: 20px;
        border: 1px solid #18acc4;
        border-radius: 50%;
        margin-left: 8px;
      }
    }
  }
`;

export const SecondRow = styled.div`
  background-color: #18acc4;

  div {
    max-width: 1000px;
    margin: 0 auto;
    height: 30px;
    color: #fff;
    font-size: 14px;
    font-style: bold;

    ul {
      display: flex;
      align-items: center;
      list-style: none;
      height: 100%;
    }
  }
`;

export const Li = styled.li`
  display: flex;
  align-items: center;
  margin: 15px;
  padding: 10px;
  font-weight: bold;

  :first-child {
    padding-left: 0;
    margin-left: 0;
  }

  background-color: ${({ active }) => (active ? '#007a8d' : null)};
  height: 100%;
`;
