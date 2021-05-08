import React from "react"
import { CallToAction, CallToActionBtn, WelcomeContainer, WelcomeContent, WelcomeSubTitles, WelcomeTitle } from "./Welcome.styles";
import { Input, Button } from "../../GlobalStyles"

function Welcome( props ) {
    const saveToLocalStorage = (items) => {
		localStorage.setItem('films-of-shopifolx-username', JSON.stringify(items));
	};

    return (
        <WelcomeContainer>
            <WelcomeContent>
                <WelcomeSubTitles>shoppies 2021 nominations</WelcomeSubTitles>
                <WelcomeTitle>FILMS OF SHOPIFOLX</WelcomeTitle>
                <WelcomeSubTitles>choose your picks. share with shopifolx. </WelcomeSubTitles>
                <CallToAction>
                    <Input 
                        name={props.value}
                        onChange={(event) => saveToLocalStorage(event.target.value)}
                        placeholder="what's your name?" 
                    />
                    <CallToActionBtn to="/pick-films">
                        <Button>choose your nominees</Button>
                    </CallToActionBtn>
                </CallToAction>
            </WelcomeContent>
        </WelcomeContainer>
    ); 
}
  
export default Welcome;