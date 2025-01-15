import styled from "styled-components";

export const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  color: #000000;
  position: relative;
`;
export const Loading = styled.div`
  height: 100%;
  width: 100%;
  background-color: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
`;
export const Follow = styled.div`
  position: absolute;
  background: linear-gradient(112.1deg, #000000 11.4%, #2d3436 70.2%);
  height: 2px;
  width: 0;
  left: 0;
  z-index: 2;
`;

export const ProgressBar = styled.div`
  position: absolute;
  left: 0;
  background-color: #fff;
  height: 2px;
  width: 0;
  transition: 0.4s ease-out;
`;

export const Content = styled.div`
  height: 100%;
  width: 0;
  position: absolute;
  left: 0;
  top: 0;
  background-color: #000000;
  padding: auto;
  z-index: 2;
  overflow: hidden;
  color: #fff;
`;