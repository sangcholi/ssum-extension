import React from 'react';
import './Header.css';

const Header = () => {

    return (
        <header>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
                  integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u"
                  crossOrigin="anonymous"/>

            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>
            <img src="https://github.com/sangcholi/ssum-extension/blob/master/logo.PNG?raw=true" alt="logo"/>
        </header>
    );
}

export default Header;