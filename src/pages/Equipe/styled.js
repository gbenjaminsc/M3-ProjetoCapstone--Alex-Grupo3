/* eslint-disable */
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  * {
    box-sizing: border-box;
    font-family: "Nunito";
    font-style: normal;
    font-weight: 400;
    color: #56b297;
    border-radius: 4px;
  }
  h2 {
    text-align: center;
  }
  ul {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 0 auto;
  }
  .informacoes-devs {
    max-width: 180px;
    max-height: 200px;
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 50px;
    margin-left: 65px;
    margin-right: 50px;
  }
  .informacoes-devs h1 {
    font-size: 20px;
  }
  .informacoes-devs p{
    color: #98b13a;
  }
  .informacoes-devs img {
    max-width: 150px;
    width: 100px;
    max-height: 100px;
    border: 1px solid #98b13a;
    border-radius: 100%;
  }

  @media(max-width:700px){
    ul{
      flex-wrap: nowrap;
      overflow-x: auto;
    }
  }
`;
export default Container;
