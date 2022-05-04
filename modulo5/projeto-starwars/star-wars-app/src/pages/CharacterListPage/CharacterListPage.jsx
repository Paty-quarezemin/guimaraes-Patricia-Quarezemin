import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { BASE_URL } from '../../constants/urls'
import { CharacterCard } from './styled'
import BackgroundImage from '../../assets/Images/star-wars-background.png'
import styled from 'styled-components'
import { LetterText } from '../CharacterDetailPage/styled'

const MainContainer = styled.div`
    background-image: url(${BackgroundImage});
    background-repeat: no-repeat;
    width: 100vw;
    height: 100vh;
`

const CharacterListPage = () => {
    const [characterList, setCharacterList] = useState([])

    useEffect(() => {
        getCharacterList()
    }, [])

    const getCharacterList = () => {
        axios
            .get(`${BASE_URL}/people`)
            .then((res) => setCharacterList(res.data.results))
            .catch((err) => console.log('Deu erro', err))
    }

    const navigate = useNavigate()

    const goToDetailPage = (i) => {
        navigate(`/detail-page/${i}`)
    }

    const characterCards = characterList.map((character, i) => {
        return <CharacterCard onClick={() => goToDetailPage(i+1)}>
            <LetterText key={i}>{character.name}</LetterText>
        </CharacterCard>

    })
    return (
        <MainContainer>
            <h2>Lista de Personagens</h2>
            {characterCards}
        </MainContainer>
    )
}

export default CharacterListPage

