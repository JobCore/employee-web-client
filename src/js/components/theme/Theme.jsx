import React from "react";
import PropTypes from 'prop-types';
import './style.scss';

const Theme = (props) => {
    return (<div className="theme">
        {props.children}
    </div>);
};
Theme.propTypes = {
  children: PropTypes.object.isRequired
};

const _Context = React.createContext({
  bar: {}
});
export default {
    Wrapper: Theme,
    Provider: _Context.Provider,
    Consumer: _Context.Consumer
};