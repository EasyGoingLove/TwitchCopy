import React from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";

declare global {
  interface Window {
    gapi: any;
  }
}

interface IState {
  isSignedIn: null;
}

type MyProps = {
  signIn: () => void;
  signOut: () => void;
};
type MyState = {};

class GoogleAuth extends React.Component<MyProps, MyState> {
  state: IState = { isSignedIn: null };
  auth: any;
  clientId: string =
    "928699538344-41nqo7be7bprunlnvkdgo6k4acujcf0a.apps.googleusercontent.com";

  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({ clientId: this.clientId, scope: "email" })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.setState({ isSignedIn: this.auth.isSignedIn.get() });
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }
  onAuthChange = () => {
    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
  };

  onSignIn = (isSignedIn: any) => {
    if (isSignedIn) {
      this.props.signIn();
    } else {
      this.props.signOut();
    }
  };

  onSignOut = () => {
    this.auth.signOut();
  };

  renderAuthBtn() {
    const signState = this.state.isSignedIn;
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

export default connect(null, { signIn, signOut })(GoogleAuth);
