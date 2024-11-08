import styled from "styled-components";

export const Container = styled.div`
    display: flex;
`;

export const CardBody = styled.div`
    display: flex;
    flex-direction: column;

    width: 100%;
    padding: 1rem;

    text-align: start;

    background: ${props => props.theme.tertiary};
    color: ${props => props.theme.text};
`;

export const CardHeader = styled.div`
    display: flex;
    flex-direction: row;

    padding-bottom: 15px;

    text-align: start;

    border-bottom: 1px solid rgba(105, 105, 105, 0.178);
`;


// .card-list {
//     display: flex;
//     gap: 1rem;
//   }


// .card-header {
//     display: flex;
//     flex-direction: row;
//     gap: 1.2rem;
//     text-align: start;
//     padding-bottom: 15px;
//     border-bottom: 1px solid rgba(105, 105, 105, 0.178);
// }

// .card-name {
//     font-weight: bold;
// }

// .card-date {
//     color: dimgrey;
//     font-size: 0.8rem;
// }

// .card-section {
//     padding: 15px;
//     border-bottom: 1px solid rgba(105, 105, 105, 0.178);
//     display: flex;
//     align-items: center;
//     gap: 30px;
//     color: dimgrey;
// }

// .card-section img{
//     margin-right: -1.5rem;
// }

// .card-accepted-section{
//     padding: 15px;
//     display: flex;
//     align-items: center;
//     gap: 10px;
//     color: #eb7a1e;
// }

// .card-accepted{
//     padding: 15px;
//     display: flex;
//     align-items: center;
//     gap: 10px;
//     color: dimgrey;
// }

// .card-accepted-section img{
//     margin-right: -0.5rem;
// }


// .div-icon {
//     width: 40px;
//     height: 40px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     border-radius: 100%;
//     background-color: #eb7a1e;
//     margin-left: 20px;
//     color: #ffffff;
//     font-weight: bold;
//     font-size: 1.4rem;
// }

// .card-button {
//     display: flex;
//     align-items: center;
// }

// .card-button span {
//     text-align: center;
//     margin-left: 15px;
//     color: dimgray;
// }

// .card-button button {
//     width: 100px;
//     padding: 15px 5px;
//     margin: 15px 0;
//     margin-left: 15px;
//     cursor: pointer;
//     font-weight: bold;
// }

// .card-button button:hover {
//     background-color: #d8d6d656;
//     color: #eb7a1e;
// }

// .card-button-accepted {
//     background-color: #eb7a1e;
//     border: none;
//     border-bottom: 3px solid #bb621a;
//     color: white;
// }

// .card-button-decline {
//     background-color: #eeeeee;
//     border: none;
//     border-bottom: 3px solid #a3a2a2;
//     color: dimgray;
// }