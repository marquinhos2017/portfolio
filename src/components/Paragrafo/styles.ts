import styled from 'styled-components'
import { Props } from '.'

export const P = styled.p<Props>`
    font-size: 14px;
    color: ${(props) => (props.tipo === 'principal' ? 'black' : 'gray')};
    line-height: 22px;
`