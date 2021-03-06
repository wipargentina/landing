import React from 'react';
import Footer from './Footer';

function Layout (props) {
    return (
      <React.Fragment>
        { props.children }
        <Footer />
      </React.Fragment>
    );
}

export default Layout;