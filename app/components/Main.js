import React from 'react'
import SearchGithub from './SearchGithub';

class Main extends React.Component {
  render() {
    return (
      <div className="main-container">
        <nav className="navbar navbar-default" role="navigation">
          <div className="col-sm-12" style={{marginTop: 15}}>
            <div className="col-sm-1"></div>
            <div className="col-sm-10">
              <SearchGithub history={this.props.history}/>
            </div>
            <div className="col-sm-1"></div>
          </div>
        </nav>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Main