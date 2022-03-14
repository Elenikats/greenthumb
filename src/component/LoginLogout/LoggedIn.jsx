import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { userContext } from '../../contexts/userContext'
import Login from './Login';


const LoggedIn = (props) => {
  const { userName } = useParams()
  console.log("logged in")
  return (
      <p>hiu</p>
  )
}


export default LoggedIn