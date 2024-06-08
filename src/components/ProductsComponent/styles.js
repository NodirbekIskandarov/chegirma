import styled from "styled-components";

export const ProductSendButton = styled.button`
    width: 60%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgba(255, 1, 0, 1);
    color: white;
    border: none;
    border-radius: 10px;
    padding-top: 19px;
    padding-bottom: 19px;
    font-size: 18px;
    font-weight: 500;
    cursor: pointer;
`

export const ProductCallButton = styled.button`
    width: 30%;
    border: none;
    border-radius: 10px;
    background-color: rgba(255, 215, 0, 1);
    color: white;
    padding: 19px 0;
    cursor: pointer;
    img {
        width: 25%;
    }
`