var React = require('react');

class SearchGithub extends React.Component {

  getRef(ref) {
    this.usernameRef = ref;
  }

  handleSubmit(e) {
    var username = this.usernameRef.value;
    this.usernameRef.value = '';
    if (username.trim()) {
      this.props.history.pushState(null, "/profile/" + username);
    }
    e.preventDefault();
  }

  render() {
    return (
      <div className="col-sm-12">
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <div className="form-group col-sm-7">
            <input type="text" className="form-control" ref={(ref) => this.getRef(ref)}/>
          </div>
          <div className="form-group col-sm-5">
            <button type="submit" className="btn btn-block btn-primary">Search GitHub</button>
          </div>
        </form>
      </div>
    )
  }
}

SearchGithub.PropTypes = {
  history: React.PropTypes.object.isRequired
};

export default SearchGithub