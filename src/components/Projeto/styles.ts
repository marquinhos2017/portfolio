import styled from 'styled-components'

export const Card = styled.div`
    border: 1px solid ${props => props.theme.cordaBorda};
    border-radius: 12px;
    padding: 16px;
`
export const LinkBotao = styled.a`
    color: ${props => props.theme.cordeFundo};
    font-size: 14px;
    background-color: ${props => props.theme.cordeFundoBotao};
    border-radius: 6px;
    text-decoration: none;
    padding: 8px;
    display: inline-block;
    margin-top: 24px;
    cursor: pointer;
`
