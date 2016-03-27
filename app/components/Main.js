import React from 'react'
import SearchGithub from './SearchGithub';

const Main = ({history, children}) => {
  return (
    <div className="main-container">
      <nav className="navbar navbar-default" role="navigation">
        <div className="col-sm-12" style={{marginTop: 15}}>
          <div className="col-sm-1"></div>
          <div className="col-sm-10">
            <SearchGithub history={history}/>
          </div>
          <div className="col-sm-1"></div>
        </div>
      </nav>
      <div className="container">
        {children}
      </div>
    </div>
  )
};

export default Main