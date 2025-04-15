import { useState } from "react"
import React from 'react'

export function Search(props) {
    const [filter, setFilter] = useState()
    const handleChangefilter = (e) => {
      e.preventDefault()
      const filter = e.target.value;
      setFilter(filter);
      props.onSearch(filter)
    }
    
  
  return (
    <form className="needs-validation" onSubmit={(e) => {e.preventDefault()}} noValidate >
      <div className="row mb-4 text-center">
        <div className="col-md-4">
          <input id="searchinput"  className="form-control" type="search" onChange={handleChangefilter} value={filter} placeholder="Search music groups" />
        </div>
        
        
      </div>
    </form>
  
  )
}
