import React, { Fragment } from 'react';
import Cookies from 'universal-cookie';

import Project from "../components/Project";




const cookies = new Cookies();

export default function requiredToken(Component) {
  class Token extends React.Component {
    constructor(props) {
      super(props);
      const token = cookies.get('project-id');
      this.state = { token };
    }
    render() {
        console.log("hei " + this.state.token );
      if (this.state.token != null) {
          
        return (
          <>
             <Component {...this.props} />
          </>
        );
      }
      return <Project />;
    }
  }
  return Token;
}
