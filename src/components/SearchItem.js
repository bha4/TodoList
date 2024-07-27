import React from 'react'

const SearchItem = ({search,setSearch}) => {

  return (
    <form onSubmit={(e)=>{e.preventDefault()}}>
    <input
    type ="text"
    placeholder='search'
    required
    value={search}
    onChange={(e)=>{setSearch(e.target.value)}}
    />
    </form>
  )
}

export default SearchItem