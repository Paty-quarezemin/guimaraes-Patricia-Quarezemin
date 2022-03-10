import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import LogoSpotify from './Images/spotify.png';

const LogoHeader = styled.img`
  width: 5vw;
  margin: 0;
  padding-top: 1%;
  `

const Headers = styled.header`
color: black;
font-size: 30px;
padding-bottom: 1%;
padding-left: 2%;
margin-bottom: 1%;
background-color: #C4C4C4;
font-family: "Lucida Console";
font-size: 30px;
`;

const ContainerPrincipal = styled.div`
  background-color: #C4C4C4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 70vh;
  `
  
class AddMusic extends React.Component {
    render() {
        return (
            <div>
                <Headers>
                    <LogoHeader src={LogoSpotify} alt='logo spotify'></LogoHeader>
                    <strong>Labefy</strong>
                </Headers>
                <ContainerPrincipal>
                    <h2>Adicionar música</h2>
                    <input placeholder='Música'></input>
                    <br />
                    <input placeholder='Artista'></input>
                    <br />
                    <input placeholder='Link da Música'></input>
                    <br />
                    <button>Inserir</button>
                </ContainerPrincipal>
            </div>
        )
    }
}

export default AddMusic;