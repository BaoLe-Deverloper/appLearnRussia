import React from "react";
import types from "./../../../Redux/Types";
import {connect} from "react-redux";


class NavbarToggle extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
   this.props._toggleMenu();
  }

  render() {
    return (
      <nav className="nav">
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href="#" onClick={this.handleClick} className="nav-link nav-link-icon toggle-sidebar d-sm-inline d-md-inline d-lg-none text-center">
          <i className="material-icons">&#xE5D2;</i>
        </a>
      </nav>
    )
  }
}

const mapDispatchToProps = dispatch=>({
    _toggleMenu : ()=>{dispatch({type:types.toggleMenu})}
})
export default connect(null,mapDispatchToProps)(NavbarToggle);