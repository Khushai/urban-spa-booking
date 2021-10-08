import React from "react";
import GlobalContextProvider from "./src/context/globalContextProvider";

export const wrapRootElement = ({element}) => {
    return <GlobalContextProvider>{element}</GlobalContextProvider>
};
