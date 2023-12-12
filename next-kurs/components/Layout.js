import React from "react"
import Footer from "../components/Footer"
import Header from "../components/Header"


const layout = ({children}) => {
    return(
        <React.Fragment>
           <Header></Header>
            {children}
          <Footer></Footer>
        </React.Fragment>
    );
};

export default layout;