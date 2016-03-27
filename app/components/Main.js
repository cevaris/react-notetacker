var React = require('react');
var SearchGithub = require('./SearchGithub');

var Main = React.createClass({
  render: function () {
    return (
      <div className="main-container">
        <nav className="navbar navbar-default" role="navigation">
          <div className="col-sm-12" style={{marginTop: 15}}>
            <div className="col-sm-1"></div>
            <div className="col-sm-10">
              <SearchGithub />
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
});

module.exports = Main;