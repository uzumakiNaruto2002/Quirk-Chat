import React, { useState } from "react";
import StatusContext from "./statusContext";

const StatusContextProvider = ({children}) => {
    const [status, setStatus] = useState("Available");

    return(
        <StatusContext.Provider value = {{status, setStatus}}>
            {children}
        </StatusContext.Provider>
    )
}

export default StatusContextProvider