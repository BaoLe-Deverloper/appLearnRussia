import React, {Component} from "react";

import { NavLink as RouteNavLink } from "react-router-dom";
import { NavItem, NavLink } from "shards-react";
import { connect } from "react-redux";
import types from "./../../../Redux/Types";
class SidebarNavItem extends Component {
  render(){
    const { item} = this.props;
    return (
      <NavItem>
        <NavLink tag={RouteNavLink} onClick={() => this.props._toggleMenu()} to={item.to}>
          {item.htmlBefore && (
            <div
              className="d-inline-block item-icon-wrapper"
              dangerouslySetInnerHTML={{ __html: item.htmlBefore }}
            />
          )}
          {item.title && <span>{item.title}</span>}
          {item.htmlAfter && (
            <div
              className="d-inline-block item-icon-wrapper"
              dangerouslySetInnerHTML={{ __html: item.htmlAfter }}
            />
          )}
        </NavLink>
      </NavItem>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  _toggleMenu: () => { dispatch({ type: types.toggleMenu }) }
})
export default connect(null, mapDispatchToProps)( SidebarNavItem);
