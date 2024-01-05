import styled from 'styled-components'

type BotaoProps = {
    principal: boolean
    fontSize?: string
}
const Botao = styled.button<BotaoProps>`
    background-color: ${(props) => (props.principal ? 'green' : 'blue')};
    font-size: ${(props) => props.fontSize || '16'};
`

const BotaoPerigo = styled(Botao)`
    background-color: red;
    color: white;

    span {
        text-decoration: line-through;
    }
`

function Teste() {
    return (
        <>
            <Botao fontSize="18px" principal>
                Clique aqui
            </Botao>
            <Botao fontSize="14px" principal={false}>
                Cancelar
            </Botao>
            <BotaoPerigo as="a" principal>
                <span>Nao Clique aqui</span>
            </BotaoPerigo>
        </>
    )
}

export default Teste
