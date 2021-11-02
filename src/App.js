import './App.css';
import {react,useState,useEffect} from 'react'
import PasswordChecklist from "react-password-checklist"
import axios from 'axios'
function App() {
  const [password, setPassword] = useState("")
  const [show, setShow] = useState(false);
  const [emailName, setemailName] = useState("");
  useEffect(() => {
    axios.get('https://run.mocky.io/v3/09e642b5-b52f-43c1-837b-8ebf70c10813').then(response=>{
      let email = response.data.user.email;
      let name = email.substring(0, email. lastIndexOf("@"));
      setemailName(name)
  })
  }, []);
  console.log(emailName)
 

const handleClick=(e)=>{
  e.preventDefault()
  setShow(!show)
}
  
	return (
    <div>
		<form>
			<label>Password:</label>
			<input type={show?"text":"password"}  onChange={e => setPassword(e.target.value)}></input>
			<button onClick={handleClick}>Show</button>
			<PasswordChecklist
				rules={["minLength","specialChar","number","capital","maxLength","lowercase"]}
				minLength={8}
        specialChar={true}
        maxLength={72}
				value={password}
				onChange={(isValid) => {}}
			/>
      <li className={password.includes(emailName)? "class1" :"class2" }>Should Not Match With Email`s Name</li>
		</form>
    </div>
	)
}

export default App;
