import React from 'react'
import logoImage from '../../assets/logo.svg'
import { Container, Content } from './styles'

export function Header() {
    return (
        <Container>
            <Content>
            <img src={logoImage} alt="dt money"/>
            <button type="button">
                Nova transação
            </button>
            </Content>
        </Container>
    )
}