import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="nav">
        <Link className="links" exact to ="/">Home</Link>
        <Link className="links" exact to ="/characters">Characters</Link>
        <Link className="links" exact to ="/locations">Locations</Link>
        <Link className="links" exact to ="/episodes">Episodes</Link>
    </div>
  );
}