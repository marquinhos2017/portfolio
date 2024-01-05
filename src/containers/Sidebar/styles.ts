import styled from 'styled-components'
import { P } from '../../components/Paragrafo/styles'
export const Descricao = styled(P)`
    margin-top: 24px;
    margin-bottom: 40px;
`
export const BotaoTema = styled.button`
    font-size: 10;
    font-weight: bold;
    padding: 8px;
    color: white;
    background-color: black;
    border-radius: 12px;
    cursor: pointer;
`
export const SidebarContainer = styled.div`
    position: sticky;
    top: 80px; // to keep the start margin-top
    left: 0;
`
