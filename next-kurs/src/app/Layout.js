import React from "react"

const layout = ({children}) => {
    return(
        <React.Fragment>
            <div>Header</div>
            {children}
            <div>Footer</div>
        </React.Fragment>
    );
};

export default layout;