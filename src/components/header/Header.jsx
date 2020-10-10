import "./Header.scss";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faSignInAlt } from '@fortawesome/free-solid-svg-icons'

export default function Header({ user , logOut}) {
  return (
    <div className="Header">
      <div>Amazhack</div>
        { user ? 
          <div>
            <div>{user.name} &nbsp; <FontAwesomeIcon icon={faSignOutAlt} onClick={logOut}/></div>
            
          </div> 
          : 
          <div>
            Sign in &nbsp;
            <FontAwesomeIcon icon={faSignInAlt}/> 
          </div> 
        }
    </div>
  ) 
}
