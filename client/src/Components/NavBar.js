import React, { useState } from 'react';
import "../css/NavBar.css";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { fetchProducts } from '../Redux/actions/actionsProducts';

function NavBar() {
  const history = useHistory()
  const dispatch = useDispatch()
  const [query, setQuery] = useState("");
  const handleInputChange = (e) => (
    setQuery(e.target.value)
  )

  const onSearch = (query)=>{
    history.push(`/search/${query}`)
    dispatch(fetchProducts(query))  
     
  }

  return (
    <div>
      <div className="navbar">
      <Link to="/">
        <img src="https://http2.mlstatic.com/frontend-assets/ui-navigation/5.12.0/mercadolibre/logo__large_plus.png" alt="" />
      </Link>
      <div className="navbar_input">
         <form onSubmit={(e) => {
              e.preventDefault()
            onSearch(query)
                     
        }}>
           <input onChange={handleInputChange} name="query" />
           <button>
              <img src="https://icongr.am/clarity/search.svg?size=16&color=c0c0c0" alt="" />
           </button>           
         </form>
        
      </div>
      
    </div>
      
    </div>
  )
}

export default NavBar