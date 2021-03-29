import React from 'react'

export const SearchBox = () => {
  return (
    <div className="headind_srch">
      <div className="recent_heading mt-2">
        <h4>Recientes</h4>
      </div>
      <div className="srch_bar">
        <div className="stylish-input-group">
          <input type="text" className="search-bar" placeholder="Buscar..."/>
        </div>
      </div>
    </div>
  )
}
