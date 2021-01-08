import PropTypes from "prop-types";
import React from "react";
import Footer from "./footer";

import Header from "./header";

function Layout({ children }) {
  return (
    <div>
      <Header transparent />

      {/* <main className="flex-1 w-full max-w-full px-4 py-8 mx-auto md:px-8 md:py-16"> */}
      {children}
      {/* </main> */}

      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
