import { useState } from "react"
import React from 'react'

export function Search(props) {
    const [filter, setFilter] = useState()
    const handleChangefilter = (e) => {
      const id = e.target.id;
      const filter = e.target.value;
      setFilter(filter);
      props.onSearch(filter)
    }
  
  return (
    <form className="needs-validation" noValidate >
      <div className="row mb-4 text-center">
        <div className="col-md-4">
          <input id="searchinput" className="form-control" type="search" onChange={handleChangefilter} value={filter} />
        </div>
        <div className="col-md-2">
          <button className="btn btn-outline-success" onClick={props.onSearch} type="submit">Search</button>
        </div>
        <div id="searchCount" className="col-md-3 text-center align-items-center" />
      </div>
    </form>
  
  )
}
