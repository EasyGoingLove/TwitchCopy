import React from "react";

declare global {
  interface Window {
    gapi: any;
  }
}

interface IState {
  isSignedIn: null;
}

class GoogleAuth extends React.Component {
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

  renderAuthBtn() {
    const signState = this.state.isSignedIn;
    if (signState === null) {
      return <div>Idk if signed in </div>;
    } else if (signState) {
      return <div>Signed In </div>;
    } else {
      return <div>Not signed in </div>;
    }
  }

  render() {
    return <div>{this.renderAuthBtn()}</div>;
  }
}
export default GoogleAuth;
