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

@media (max-width: 1024px) {
width: 350px;
max-width: 350px;
padding: 24px;
}

@media (max-width: 768px) {
width: 100%;
max-width: none;
padding: 16px;
}

thead th {
padding: 0;
width: 100%; 
 
@media (max-width: 768px) {
padding: 0 0 0 18px;
}
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
 
@media (max-width: 768px) {
padding: 0 0 0 18px;
}
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

@media (max-width: 1024px) {
width: 290px;
max-width: 290px;
height: 36px;
padding: 8px;
}

@media (max-width: 768px) {
width: 100%;
max-width: 100%; 
margin: 0 0 24px 18px;
}
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

@media (max-width: 1024px) {
width: 290px;
max-width: 290px;
height: 36px;
padding: 8px;
}

@media (max-width: 768px) {
width: 100%;
max-width: 100%; 
margin: 0 0 24px 18px;
}
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

@media (max-width: 1024px) {
padding: 8px 15px;
font-size: 12px;
}

@media (max-width: 768px) {
padding: 6px 12px;
font-size: 11px;
}
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
background: ${props => props.disabled ? '#cccccc' : '#622aa8'};
}

@media (max-width: 1024px) {
width: 290px;
padding: 8px;
font-size: 10px; 
}

@media (max-width: 768px) {
width: 100%;
max-width: none;
height: 36px;
padding: 8px 12px;
font-size: 10px; 
margin: 0 0 24px 18px;
}
`;

export const CategoriesContainer = styled.div`
display: flex;
flex-wrap: wrap;
margin-left: -5px;
max-width: calc(100% - 40px);
overflow-x: auto;
padding-bottom: 24px;
box-sizing: border-box;

@media (max-width: 1024px) {
max-width: none;
padding-bottom: 20px;
}

@media (max-width: 768px) {
max-width: 100%;
padding-bottom: 16px;
justify-content: flex-start; 
padding-left: 18px;
}
`;