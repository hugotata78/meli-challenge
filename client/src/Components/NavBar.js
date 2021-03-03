import React, { useState } from 'react';
import "../css/NavBar.css";
import { Link } from "react-router-dom";


function NavBar({ onSearch }) {

  const [query, setQuery] = useState("");
  const handleInputChange = (e) => (
    setQuery(e.target.value)
  )

  

  return (
    <div>
      <div className="navbar">
      <Link to="/">
        <img src="https://http2.mlstatic.com/frontend-assets/ui-navigation/5.12.0/mercadolibre/logo__large_plus.png" alt="" />
      </Link>
      <div className="navbar_input">
        <input onChange={handleInputChange} name="query" />
        <button onClick={(e) => {
            e.preventDefault()
            onSearch(query)
                     
        }} type="submit">
          <img src="https://icongr.am/clarity/search.svg?size=16&color=c0c0c0" alt="" />
        </button>
      </div>
      
    </div>
      
    </div>
  )
}

export default NavBar