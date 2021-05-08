import React from "react"
import { Input, Button } from "../../GlobalStyles"
import { HeroContainer, HeroContent, HeroTitle, HeroSubtitles } from "./Hero.styles";

const Hero = ( props ) => (
   <HeroContainer>
       <HeroContent>
           <HeroTitle color>{props.title}</HeroTitle>
           <HeroSubtitles>{props.subtitle}</HeroSubtitles>
        </HeroContent>
   </HeroContainer>
)
  
export default Hero;