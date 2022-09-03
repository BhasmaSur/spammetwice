import React from 'react'
import { useNavigate, Link } from "react-router-dom";
const LinksPage = () => {
  return (
    <div>
      <div>
        <Link to="/spam">Spam</Link>
      </div>
      <div>
        <Link to="/add-spam">Add Spam</Link>
      </div>
      <div>
        <Link to="/circular-progress">Circular progress</Link>
      </div>
      <div>
        <Link to="/reported-sites">Reported sites</Link>
      </div>

      <div>
        <Link to="/test">Test</Link>
      </div>
    </div>
  )
}

export default LinksPage