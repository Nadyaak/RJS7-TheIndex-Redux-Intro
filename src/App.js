import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionC from "./store/ actions";

// Data
//import authors from "./data";

// Components
import Sidebar from "./Sidebar";
import AuthorsList from "./AuthorsList";

class App extends Component {
  render() {
    const newAuthor = {
      id: 10,
      first_name: "Author",
      last_name: "McAuthorFace",
      imageUrl:
        "https://www.netz.de/images/2016-11-21-firefox-focus-header-58cfedd908c25_500_300.jpg",
      books: [
        {
          title: "Anonymous book",
          color: "mysterious color"
        }
      ]
    };

    return (
      <div id="app" className="container-fluid">
        <div className="row">
          <div className="col-2">
            <Sidebar addAuthorHandler={() => this.props.addAuthor(newAuthor)} />
          </div>
          <div className="content col-10">
            <AuthorsList authors={this.props.authorsR} />
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    authorsR: state.authors
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addAuthor: author => dispatch(actionC.addAuthor(author))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
