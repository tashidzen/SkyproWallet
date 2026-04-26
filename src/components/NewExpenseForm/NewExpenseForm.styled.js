import styled from 'styled-components';

export const Stable = styled.table`
  width: 379px;
  height: 618px;
  font-size: 12px;
  box-shadow: 0px 20px 67px -12px #00000021;
  position: relative;
  display: block;
  word-wrap: break-word;
  table-layout: fixed;
  padding: 32px;
  overflow: visible; 
   
  @media (min-width: 1024px) and (max-width: 1232px) {
    width: 60%;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    width: 100%;
    padding: 20px;
  }

  @media (max-width: 767px) {
    width: 100%;
    padding: 0 16px 87px;
    box-shadow: none;
    border-radius: 0;
    background-color: #FFFFFF;
    height: auto;
  }

  thead th {
    padding: 0;
    width: 100%;

    @media (min-width: 768px) and (max-width: 1023px) {
      padding: 0 0 0 8px;
    }

    @media (max-width: 767px) {
      display: none;
    }
  }

  tbody tr {
    vertical-align: top;
  }

  .desktop-buttons {
    @media (max-width: 767px) {
      display: none;
    }
  }
`;

export const FormTitle = styled.h3`
  font-weight: 700;
  font-size: 24px;
  line-height: 100%;
  color: #000000;
  font-family: "Montserrat", sans-serif;
  text-align: left;
`;

export const FieldLabel = styled.div`
  font-weight: 600;
  font-size: 16px;
  margin: 24px 0 16px 0;
  color: #000000;
  font-family: 'Montserrat', sans-serif;

  @media (min-width: 768px) and (max-width: 1023px) {
    padding: 0 0 0 8px;
  }

  @media (max-width: 767px) {
    padding: 0;
    font-size: 16px;
    color: #000000;
  }
`;

export const CategoriesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -5px;
  width: calc(100% - 20px);
  overflow-x: auto;
  gap: 6px;
  box-sizing: border-box;

  @media (min-width: 1024px) and (max-width: 1439px) {
    width: 100%;
    padding-bottom: 20px;
  }

  @media (min-width: 768px) and (max-width: 1023px) {
    width: 100%;
    padding-bottom: 16px;
    justify-content: flex-start;
    padding-left: 8px;
  }

  @media (max-width: 767px) {
    padding-bottom: 24px;
    justify-content: flex-start;
    width: auto;
  }
`;

export const SFixedBottom = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 87px;
  background-color: #ffffff;
  box-shadow: 0px -20px 67px -12px #00000021;
  padding: 12px 16px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 1000;

  @media (min-width: 768px) {
    display: none;
  }

  padding-bottom: max(12px, env(safe-area-inset-bottom));
`;