import React from "react"
import { Input, Button } from "../../GlobalStyles"
import { 
    SearchBarContainer, 
    SearchBtn,
} from "./SearchBar.styles";

const SearchBar = ( props ) => (
   <SearchBarContainer>
        <Input 
            className='form-control'
            value={props.value}
            onChange={(event) => props.setSearchValue(event.target.value)}
            placeholder='search for your fave films' 
        />
        {props.atMaxFilms ? 
        <SearchBtn to="/nominations">
            <Button>continue</Button>
        </SearchBtn>
        : null }
    </SearchBarContainer>
)
  
export default SearchBar;