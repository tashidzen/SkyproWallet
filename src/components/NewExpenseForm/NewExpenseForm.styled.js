import styled from 'styled-components';

export const Stable = styled.table`
  width: 379px;
  height: 618px;
  max-width: 379px;
  max-height: 618px;
  font-size: 12px;
  box-shadow: 0px 20px 67px -12px #00000021;
  position: relative;
  display: block;
  word-wrap: break-word;
  table-layout: fixed;
  padding: 32px;
  overflow: visible;

  thead th {
    padding: 0;
    width: 100%;
  }

  tbody tr {
    vertical-align: top;
  }
`;

export const FormTitle = styled.h3`
  font-weight: 700;
  font-size: 22px;
  line-height: 100%;
  margin: 0 0 24px 0;
  color: #333;
  font-family: 'Montserrat', sans-serif;
  text-align: left;
`;

export const FieldLabel = styled.div`
  font-weight: 600;
  font-size: 14px;
  margin: 0 0 16px 0;
  color: #333;
  font-family: 'Montserrat', sans-serif;
`;

export const FormInput = styled.input`
  display: block;
  width: 313px;
  max-width: 313px;
  height: 39px;
  padding: 10px;
  margin: 0 0 24px 0;
  border: 0.5px solid #999999;
  border-radius: 6px;
  background: transparent;
  font-family: 'Montserrat', sans-serif;
  font-size: 11px;
  transition: all 0.3s ease;
  box-sizing: border-box;
  outline: none;

  &:focus {
    background: ${props => props.$valid ? '#F1EBFD' : '#fff'};
    border-color: ${props => props.$valid ? '#F1EBFD' : '#999999'};
  }

  ${props => props.$error && `
    background-color: #ffe6e6;
    border-color: #cc0000;
    &:focus {
      background-color: #ffe6e6;
      border-color: #cc0000;
    }
  `}
`;

export const DateInput = styled.input`
  display: block;
  width: 313px;
  max-width: 313px;
  height: 39px;
  padding: 10px;
  margin: 0 0 24px 0;
  border: 0.5px solid #999999;
  border-radius: 6px;
  background: transparent;
  font-family: 'Montserrat', sans-serif;
  font-size: 11px;
  transition: all 0.3s ease;
  box-sizing: border-box;
  outline: none;

  &:focus {
    background: ${props => props.$valid ? '#F1EBFD' : '#fff'};
    border-color: ${props => props.$valid ? '#F1EBFD' : '#999999'};
  }

  ${props => props.$error && `
    background-color: #ffe6e6;
    border-color: #cc0000;
    &:focus {
      background-color: #ffe6e6;
      border-color: #cc0000;
    }
  `}
`;

export const CategoryButton = styled.button`
  display: inline-flex;
  align-items: center;
  padding: 8px 15px;
  margin: 5px;
  border: none;
  border-radius: 30px;
  background: #F4F5F6;
  color: #333;
  font-family: 'Montserrat', sans-serif;
  font-size: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
  min-width: min-content;

  svg {
    margin-right: 6px;
  }

  &:hover {
    background: #e0e0e0;
  }

  ${({ selected }) =>
    selected &&
    `
      background: #F1EBFD;
      color: #7334EA;
      svg path {
        fill: #7334EA;
      }
      &:hover {
        background: #F1EBFD;
      }
    `}
`;

export const FormButton = styled.button`
  width: 313px;
  max-width: 313px;
  height: 39px;
  border-radius: 6px;
  padding: 10px;
  background: ${props => props.disabled ? '#cccccc' : '#7334EA'};
  color: ${props => props.disabled ? '#666666' : '#fff'};
  border: none;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 11px;
  line-height: 100%;
  text-align: center;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  transition: background 0.3s ease;
  box-sizing: border-box;

  &:hover {
    background: ${props => props.disabled ? '#cccccc' : '#7334EA'};
  }
`;