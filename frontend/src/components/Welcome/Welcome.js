import React from "react"
import { CallToAction, WelcomeContainer, WelcomeContent, WelcomeSubTitles, WelcomeTitle } from "./Welcome.styles";
import { Input, Button } from "../../GlobalStyles"

const Welcome = ( props ) => (
   <WelcomeContainer>
       <WelcomeContent>
           <WelcomeSubTitles>SHOPPIES 2021 NOMINATIONS</WelcomeSubTitles>
           <WelcomeTitle>FILMS OF SHOPIFOLX</WelcomeTitle>
           <WelcomeSubTitles>Choose your films. Share with Shopifolx. </WelcomeSubTitles>
           <CallToAction>
               <Input />
               <Button>Choose your nominees</Button>
           </CallToAction>
       </WelcomeContent>
   </WelcomeContainer>
)
  
export default Welcome;