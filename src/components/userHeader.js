import React, { Component } from "react";
import { connect } from "react-redux";

class UserHeader extends Component {
  render() {
    const { user } = this.props;
    if (!user) {
      return <div>Loading...</div>;
    }
    return <div className="header">{user.name}</div>;
  }
}

const mapStateToProps = (state, ownedProps) => {
  return {
    user: state.users.find(user => ownedProps.userId === user.id)
  };
};

export default connect(
  mapStateToProps,
  null
)(UserHeader);
