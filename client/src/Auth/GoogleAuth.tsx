import React from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";



type MyProps = {
  signIn: (fnc?: number) => void;
  signOut: () => void;
  isSignedIn: any;
};
type MyState = {};

class GoogleAuth extends React.Component<MyProps, MyState> {
  auth: any;
  clientId: string =
    "928699538344-41nqo7be7bprunlnvkdgo6k4acujcf0a.apps.googleusercontent.com";

  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({ clientId: this.clientId, scope: "email" })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }
  onAuthChange = (isSignedIn: any) => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId()!);
    } else {
      this.props.signOut();
    }
  };

  onSignIn = () => {
    this.props.signIn();
  };

  onSignOut = () => {
    this.props.signOut();
  };

  renderAuthBtn() {
    const signState = this.props.isSignedIn;
    if (signState === null) {
      return null;
    } else if (signState) {
      return (
        <button className="ui red google button" onClick={this.onSignOut}>
          <i className="google icon" />
          Sign Out
        </button>
      );
    } else {
      return (
        <button className="ui red google button" onClick={this.onSignIn}>
          <i className="google icon" />
          Sign In
        </button>
      );
    }
  }

  render() {
    return <div>{this.renderAuthBtn()}</div>;
  }
}

const mapStateToProps = (state: any) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
