import React from "react"
import { CallToAction, CallToActionBtn, WelcomeContainer, WelcomeContent, WelcomeSubTitles, WelcomeTitle } from "./Welcome.styles";
import { Input, Button } from "../../GlobalStyles"

const Welcome = ( props ) => (
   <WelcomeContainer>
       <WelcomeContent>
           <WelcomeSubTitles>shoppies 2021 nominations</WelcomeSubTitles>
           <WelcomeTitle>FILMS OF SHOPIFOLX</WelcomeTitle>
           <WelcomeSubTitles>choose your picks. share with shopifolx. </WelcomeSubTitles>
           <CallToAction>
               <Input 
                    placeholder="what's your name?" 
                />
               <CallToActionBtn to="/pick-films">
                <Button>choose your nominees</Button>
               </CallToActionBtn>
           </CallToAction>
       </WelcomeContent>
   </WelcomeContainer>
)
  
export default Welcome;