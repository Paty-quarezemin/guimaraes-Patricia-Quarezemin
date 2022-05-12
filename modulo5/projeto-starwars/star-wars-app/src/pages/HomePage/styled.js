import styled from 'styled-components'
import BackgroundImage from '../../assets/Images/star-wars-background.png'

export const MainContainer = styled.div`
background-image: url(${BackgroundImage});
background-repeat: no-repeat;
background-size: cover;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
export const ButtonsContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
height: 40px;
padding: 500px;
`
export const Buttons = styled.button`
background-color: #4E4B4B;
font-size: large;
color: #F8E00F;
border-radius: 8px;
`
