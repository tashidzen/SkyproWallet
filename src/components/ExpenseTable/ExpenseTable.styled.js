import styled from "styled-components";

export const Stable = styled.table`
    max-width: 789px;
    width: 100%;
    height: 618px;
    font-size: 12px;
    box-shadow: 0px 20px 67px -12px #00000021;
    margin-right: 0;
    border-spacing: 32px 14px;
    position: relative;
    display: block;

    @media (max-width: 1024px) {
        max-width: 750px;
        border-spacing: 24px 14px;
    }

    @media (max-width: 768px) {
        max-width: 100%;
        border-spacing: 16px 12px;
    }

    thead {
        position: relative;
        max-width: 789px;
        width: 100%;
        display: table;
        margin-bottom: -18px;

        &::after {
            content: "";
            position: absolute;
            top: 114px;
            left: 0px;
            right: 0px;
            height: 0.5px;
            background-color: #999999;
        }

        th {
            &:nth-child(1) {
                width: 19.5%;
            }
            &:nth-child(2) {
                width: 19.5%;
            }
            &:nth-child(3) {
                width: 19.14%;
            }
            &:nth-child(4) {
                width: 22.35%;
            }
            &:nth-child(5) {
                width: 1.8%;
            }
        }
    }

    td {
        &:nth-child(1) {
            width: 23.9%;
        }
        &:nth-child(2) {
            width: 23.9%;
        }
        &:nth-child(3) {
            width: 24.2%;
        }
        &:nth-child(4) {
            width: 27%;
        }
        &:nth-child(5) {
            width: 1%;
        }
    }
`;

export const SheaderTable = styled.th`
  font-size: 24px;
  font-weight: 700;
  padding-top: 18px;
  padding-bottom: 18px;
  text-align: left; 
   
  
    @media (max-width: 768px) {
     padding-left: 18px;
    }
`;

export const SnameColumn = styled.tr`
  color: #999999;
  text-align: left;
  th {
    font-weight: normal; 
     
    @media (max-width: 768px) {
     text-align: center;
    }
  }
`;

export const StBody = styled.tbody`
  display: block;
  height: 479px;
  overflow-y: auto; 
   
  @media (max-width: 768px) {
     text-align: center; 
     padding-right: 5px;
    }

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: #d9d9d9;
    border-radius: 30px;
    min-height: 100px;
  }
`;
 
  
   
// import styled from "styled-components";

// export const Stable = styled.table`
//     max-width: 789px;
//     width: 100%;
//     height: 618px;
//     font-size: 12px;
//     box-shadow: 0px 20px 67px -12px #00000021;
//     margin-right: 0;
//     border-spacing: 32px 14px;
//     position: relative;
//     display: block;

//     thead {
//         position: relative;
//         max-width: 789px;
//         width: 100%;
//         display: table;
//         margin-bottom: -18px;

//         &::after {
//             content: "";
//             position: absolute;
//             top: 114px;
//             left: 0px;
//             right: 0px;
//             height: 0.5px;
//             background-color: #999999;
//         }

//         th {
//             &:nth-child(1) {
//                 width: 19.5%;
//             }
//             &:nth-child(2) {
//                 width: 19.5%;
//             }
//             &:nth-child(3) {
//                 width: 19.14%;
//             }
//             &:nth-child(4) {
//                 width: 22.35%;
//             }
//             &:nth-child(5) {
//                 width: 1.8%;
//             }
//         }
//     }

//     td {
//         &:nth-child(1) {
//             width: 23.9%;
//         }
//         &:nth-child(2) {
//             width: 23.9%;
//         }
//         &:nth-child(3) {
//             width: 24.2%;
//         }
//         &:nth-child(4) {
//             width: 27%;
//         }
//         &:nth-child(5) {
//             width: 1%;
//         }
//     }
// `;

// export const SheaderTable = styled.th`
//     font-size: 24px;
//     font-weight: 700;
//     padding-top: 18px;
//     padding-bottom: 18px;
//     text-align: left;
// `;

// export const SnameColumn = styled.tr`
//     color: #999999;
//     text-align: left;
//     th {
//         font-weight: normal;
//     }
// `;

// export const StBody = styled.tbody`
//     display: block;
//     height: 479px;
//     overflow-y: auto;

//     &::-webkit-scrollbar {
//         width: 6px;
//     }

//     &::-webkit-scrollbar-thumb {
//         background: #d9d9d9;
//         border-radius: 30px;
//         min-height: 100px;
//     }
// `;
