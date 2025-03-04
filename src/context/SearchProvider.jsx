import  { useState } from 'react'
import SearchContext from './SearchContext'

const SearchProvider = ({children}) => {
    const [search,setSearch] = useState(false)
    //console.log(search)

  return (
    <SearchContext.Provider value={{search,setSearch}}>
        {children}
    </SearchContext.Provider>
  )
}

export default SearchProvider