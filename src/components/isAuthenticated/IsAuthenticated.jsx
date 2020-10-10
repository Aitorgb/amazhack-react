import React from "react";
import { Redirect, Route } from "react-router-dom";

export default function IsAuthenticated(props) {
    if ( !props.user ) {
        return <Redirect to="/login" />
    } else {
        return <Route {...props} />;
    }
}
