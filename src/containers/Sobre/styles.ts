import styled from 'styled-components'

export const GithubSecao = styled.div`
    margin-top: 32px;
    margin-bottom: 64px;
    img {
        height: 157px;
    }

    // Faz com que a imgagem ocupar 100 do container responsivamente
    @media (max-width: 768px) {
        img {
            width: 100%;
            height: auto;
            max-width: 100%;
            padding-bottom: 24px;
        }
    }
`
