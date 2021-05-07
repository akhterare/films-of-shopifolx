import React from "react"
import { WelcomeContainer, WelcomeContent, WelcomeSubTitles, WelcomeTitle } from "./Welcome.styles";
import Input from "../Input/Input"

const Welcome = ( props ) => (
   <WelcomeContainer>
       <WelcomeContent>
           <WelcomeSubTitles>SHOPPIES 2021 NOMINATIONS</WelcomeSubTitles>
           <WelcomeTitle>FILMS OF SHOPIFOLX</WelcomeTitle>
           <WelcomeSubTitles>Choose your films. Share with Shopifolx. </WelcomeSubTitles>
           <Input />
       </WelcomeContent>
   </WelcomeContainer>
)
  
export default Welcome;