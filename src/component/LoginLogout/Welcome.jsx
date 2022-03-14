import { Link } from 'react-router-dom'

const Welcome = (props) => {


  return <div>
    <p>Welcome! You are not logged in. You can only see this public content.</p>
    <Link to="/Register">Log In</Link>
  </div>
}


export default Welcome