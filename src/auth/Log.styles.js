import styled from "styled-components";

 export const ContainerButton = styled.div`
    width: 100%;
    text-align: center;

`;

export const Button = styled.button`
        width: 250px;
        background-color: #FE2E64;
        color: #fff;
        border: none;
        padding: 10px 20px;
        border-radius: 20px;
        font-size: 18px;
        margin-top: 40px;
        transition: all 0.2s ease-out;
        &:hover{
            cursor: pointer;
            background-color: #F5A9BC;
        }
    `;