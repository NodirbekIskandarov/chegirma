import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HeadeMenuList = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 32px;
    @media (max-width: 900px) {
        display: none;
    }
`

export const ButtonCategory = styled.button`
    padding: 5px;
    background-color: red;
    color: white;
    border: none;
    width: 130px;
    border-radius: 5px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    cursor: pointer;
    font-size: 12px;
    font-weight: 500;
`

export const HeaderMenuListItem = styled(NavLink)`
padding: 15px 0;
    display: flex;
    align-items: center;
    gap: 4px;
    &.active {
        position: relative;
        &::after{
            position: absolute;
            content: '';
            width: 100%;
            height: 3px;
            z-index: 1;
            bottom: 0;
            left: 0;
        }
    }
`