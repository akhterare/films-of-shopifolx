import React from "react"
import { Input } from "../../GlobalStyles"
import { SearchBarContainer, SearchButtonSubtitle, SearchBarSubtitleContainer } from "./SearchBar.styles";

const SearchBar = ( props ) => (
   <SearchBarContainer>
        <Input 
            className='form-control'
            value={props.value}
            onChange={(event) => props.setSearchValue(event.target.value)}
            placeholder='search for your fave films' 
        />
    </SearchBarContainer>
)
  
export default SearchBar;