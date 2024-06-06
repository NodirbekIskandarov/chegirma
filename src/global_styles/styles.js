import styled from "styled-components"

export const Wrapper = styled.div`
    margin: 0 auto;
    min-height: ${props => props.height || 'auto'};
    @media (max-width: 1440px) {
        width: 100%;
    }
    background-color: rgba(0, 0, 0, 0.05);
`

export const Container = styled.div`
    width: 1232px;
    margin: 0 auto;
    @media (max-width: 1232px) {
        width: 100%;
        padding: 0 20px;
    }
`

export const WelcomeMainText = styled.h2`
    font-size: 80px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-transform: ${props => props.texttransform || "uppercase"};
    font-size: ${props => props.fontSize};
    padding-bottom: ${props => props.paddingbottom || "0px"};
    @media (max-width: 768px) {
        font-size: ${props => props.mediafontsize};
    }
`

export const GlobalParagraph = styled.p`
    font-size: ${props => props.fontSize};
    font-style: normal;
    padding-bottom: ${props => props.paddingbottom || "0px"};
    font-weight: ${props => props.fontWeight};
    line-height: normal;
    opacity: ${props => props.oposity};
    @media (max-width: 600px) {
        font-size: ${props => props.mediafontsize}
    }
`

export const GlobalLink = styled.a`
    font-size: ${props => props.fontSize};
    font-style: normal;
    cursor: pointer;
    text-decoration: none;
    font-weight: ${props => props.fontWeight};
    line-height: normal;
    padding-bottom: ${props => props.paddingbottom || "0px"};
    &:hover {
        color: ${props => props.color};
    }
`