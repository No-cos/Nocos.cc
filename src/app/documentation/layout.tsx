import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Layout = ({ children }) => {
    return (
      <div>
        <head>
          <title>My Next.js App</title>
          
        </head>
        <Header></Header>
        <main>{children}</main>
       <Footer></Footer>
      </div>
    );
  };
  
  export default Layout;