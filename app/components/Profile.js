var React = require('react');
var Router = require('react-router');
var Repos = require('./Github/Repos');
var UserProfile = require('./Github/UserProfile');
var Notes = require('./Notes/Notes');
var ReactFireMixin = require('reactfire');
var Firebase = require('firebase');
var helpers = require('../utils/helpers');

var Profile = React.createClass({
  mixins: [ReactFireMixin],
  getInitialState: function () {
    return {
      notes: [1, 2, 3],
      bio: {
        name: 'Chicken Unicorn'
      },
      repos: ['a', 'b', 'c']
    }
  },
  componentDidMount: function () {
    this.ref = new Firebase("https://blazing-fire-5626.firebaseio.com/");
    this.init(this.props.params.username);
  },
  componentWillReceiveProps: function (nextProps) {
    this.unbind('notes');
    this.init(nextProps.params.username);
  },
  componentWillUnmount: function () {
    this.unbind('notes');
  },
  handleAddNote: function (newNote) {
    this.ref.child(this.props.params.username).child(this.state.notes.length).set(newNote);
  },
  init: function (username) {
    var childRef = this.ref.child(username);
    this.bindAsArray(childRef, 'notes');
    helpers.getGithubInfo(username)
      .then(function (data) {
        this.setState({
          bio: data.bio,
          repos: data.repos
        })
      }.bind(this));
  },
  render: function () {
    return (
      <div className="row">
        <div className="col-md-4">
          <UserProfile username={this.props.params.username} bio={this.state.bio}/>
          User Profile Component --> {this.props.params.username}
        </div>
        <div className="col-md-4">
          <Repos username={this.props.params.username} repos={this.state.repos}/>
        </div>
        <div className="col-md-4">
          <Notes
            username={this.props.params.username}
            notes={this.state.notes}
            addNote={this.handleAddNote}
          />
          Notes Component
        </div>
      </div>
    )
  }
});


module.exports = Profile;