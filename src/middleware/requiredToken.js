import React from "react";
import Cookies from "universal-cookie";

import Project from "../components/Project";

const cookies = new Cookies();

export default function requiredToken(Component) {
  class Token extends React.Component {
    constructor(props) {
      super(props);
      const token = cookies.get("project-id");
      console.log(token)
      this.state = { token };
    }
    
    render() {
      if (this.state.token != null) {
        return (
          <>
            <Component {...this.props} />
          </>
        );
      }
      window.location.replace(`http://localhost:3000/`);
    }
  }
  return Token;
}
