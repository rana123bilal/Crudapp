import axios from "axios";
import {useState} from "react";
import { Button,Form } from "semantic-ui-react";
import { useHistory } from "react-router-dom";

function Register(props) {

  let history = useHistory();
    const [registerData, setRegisterData] = useState({
        email : '',
        password :'',
        confirmpassword :''
    })


    function emailHandler(event){
        setRegisterData({...registerData, email : event.target.value})
    }
    function passwordHandler(event){
        setRegisterData({...registerData, password : event.target.value})
    }
    function confirmpasswordHandler(event){
        setRegisterData({...registerData, confirmpassword : event.target.value})
    }
    function clickHandler(event){
        event.preventDefault();
        if(registerData.email !== '' && registerData.password !== '' && registerData.confirmpassword !== ''){
            if(registerData.password === registerData.confirmpassword){
                axios.post(`https://624f11adbdda77e9a9b96532.mockapi.io/registerdata`, registerData);
                console.log(registerData)
                history.push('/read')
            }
        }else{
            alert('Please fill all fields')
        }
        
    }


  return (
    <div>
      <Form>
        <Form.Field>
          <label>Email</label>
          <input placeholder="Email" type='email' onChange={emailHandler}/>
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input placeholder="Password" type='password' onChange={passwordHandler} />
        </Form.Field>
        <Form.Field>
          <label>Confirm Password</label>
          <input placeholder="Confirm Password" type='password' onChange={confirmpasswordHandler} />
        </Form.Field>
        <Button type="submit" onClick={clickHandler}>Register</Button>
      </Form>
    </div>
  );
}

export default Register;
