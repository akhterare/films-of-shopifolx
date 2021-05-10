import React from "react"
import { HeroContainer, HeroContent, HeroTitle, HeroSubtitles } from "./Hero.styles";

const Hero = ( props ) => (
   <HeroContainer>
       <HeroContent>
           <HeroTitle color>
              {props.username ? props.username : ""}{props.username ? ", " : ""}{props.title}
            </HeroTitle>
           <HeroSubtitles>{props.subtitle}</HeroSubtitles>
        </HeroContent>
   </HeroContainer>
)
  
export default Hero;