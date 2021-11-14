import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  padding: 1%;

  display: grid;
  grid-template-columns: 332px 332px 332px 332px 332px;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const Card = styled.div`
  height: 360px;
  width: 100%;
  border: 1px solid #c2c2c2;
  border-radius: 5px;

  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  .title {
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
      width: 100%;
      margin: 0;
      font-size: 2.1rem;

      text-align: center;
      font-weight: 900;
    }
  }

  .center-price {
    width: 100%;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p {
      font-size: 12px;
      margin: 0;
      color: #bbbbbb;
      font-weight: 400;
    }

    div.hr {
      top: 37px;
      position: relative;
      border: 1px solid #e4e4e4;
      width: 100%;
    }

    div.price-box {
      width: 200px;
      height: 60px;

      z-index: 1;

      display: flex;
      justify-content: center;
      align-items: center;

      border: 1px solid #c0c0c0;
      border-radius: 50px;
      background: #f5f5f5;

      h2 {
        font-size: 28px;
        font-weight: 700;
        text-align: center;
        margin: 0;
      }
    }
  }

  .links {
    width: 100%;
    height: 52px;

    padding: 10px 0;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    div.twitter {
      width: 138px;
      display: flex;
      justify-content: space-evenly;
      align-items: center;

      a {
        text-decoration: none;
        font-size: 12px;
        color: #2c9fd3;
        font-weight: 600;
      }
    }

    div.anuncio-tweet {
      width: 100%;
      display: flex;
      justify-content: space-evenly;
      align-items: center;

      a {
        width: 120px;
        height: 23px;

        text-decoration: none;

        display: flex;
        justify-content: space-evenly;
        align-items: center;

        font-size: 12px;
        font-weight: 600;
        color: #2c9fd3;

        border: 1px solid #2c9fd3;
        border-radius: 50px;
        background: #d3effb;
      }
    }
  }

  .minor-price {
    width: 100%;
    height: 21%;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    background: #f5f5f5;
    border: 1px solid #c0c0c0;

    p {
      font-size: 12px;
      margin: 0;
      color: #9e9e9e;
      font-weight: 700;
    }

    p.strong {
      font-weight: 800;
      color: #4e4e4e;
    }

    .valor-date {
      width: 100%;
      display: flex;
      justify-content: space-evenly;
      align-items: center;

      .divisor {
        width: 1px;
        height: 35px;
        background: #cfcfcf;
      }
    }
  }
`;
