
const React = require('react')
const GlobalContextProvider = require('./src/context/globalContextProvider');

exports.wrapRootElement = ({element}) => {
return(
    <GlobalContextProvider>
        {element}
    </GlobalContextProvider>
)
};