import React,{useState} from "react";
import InvalidInput from "./InvalidInput";


export default function UserForm(props) {
    console.log("user form called")
  const [username, setUsername] = useState("");
  const [age, setAge] = useState();
  const [validEntry,setValidEntry]=useState(false)
  

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if(username.length===0 || age.length===0 || age<0){
        setValidEntry(true)
    }else{
        setValidEntry(false)
        let obj={
            username:username,
            age:age
        }

        props.insertUserFn(obj);
    }
  };

  const changeUsernameHandler = (e) => {
    e.preventDefault();
    if (e.target.value.length > 0) {
        setValidEntry(false)
      setUsername(e.target.value);
    }
    return;
  };

  const changeAgeHandler = (e) => {
    e.preventDefault();
    if (e.target.value.length > 0) {
        setValidEntry(false)
      setAge(e.target.value);
    }
    return;
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <label>UserName:</label>
        <input
          type="text"
          value={username}
          onChange={changeUsernameHandler}
        ></input>
        <br />
        <label>Age(Years):</label>
        <input type="text" value={age} onChange={changeAgeHandler}></input>
        <br />
        <button type="submit">Add User</button>
      </form>

      {
        validEntry && 
        <InvalidInput ageFilter={age}/>
      }
    </div>
  );
}
