import React, {useState, useEffect} from 'react';
import './venderTest.css'
function Navigation(){
    const [canShow, setShow] = useState(false);
    return (
        <React.Fragment>
        <div className="navbar">
            <a href="#" onClick = {() => setShow(false)}>Home</a> 
            <a href="#" onClick = {() => setShow(false)}>Search</a> 
            <a href="#" onClick = {() => setShow(true)}>Student Info</a>
        </div>
        {canShow
        ?  <StudentInfo_table/>
        : <p>default</p>
      }
        <ClickShow />
        </React.Fragment>
    );
}

function renderTableHeader() {
   return (
       <thead>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>E-mail</th>
            </tr>
       </thead>
   );
 }

function renderTableData(students) {
    console.log(students);
    return (
        <tbody>
            {students.map((student, index) => {
            const { id, name, age, email } = student;
            return (
                    <tr key={name}>
                        <td>{name}</td>
                        <td>{age}</td>
                        <td>{email}</td>
                    </tr>
            )
            })}
        </tbody>
    );
 }

function StudentInfo_table(){
    const [info, setInfo] = useState({});
    const [list, setList] = useState([]);
    function onChange(e, type){
        setInfo({...info, ...{[type]: e.target.value}});
    }
    function handleClick(){
        setList([...list, info]);
    }
     return (
        <div>
           <h1>Student Info</h1>
           <br></br>
           <input
                type = "text"
                onChange = {(e) => onChange(e, "name")}
                placeholder = {"Input Name"}
            />
            <input
                type = "text"
                onChange = {(e) => onChange(e, "age")}
                placeholder = {"Input Age"}
            />
            <input
                type = "text"
                onChange = {(e) => onChange(e, "email")}
                placeholder = {"Input E-mail"}
            />
            <button onClick = {handleClick}>Submit</button>
           <table id = 'students'>
                {renderTableHeader()}
                {renderTableData(list)}
           </table>  
        </div>
     );
}

function ClickShow(){
    const [content, setContent] = useState("fuck world.");
    const user1 = {
        name: 'Alex',
        age: 16,
        city: 'Edison'
    }
    const user2 = {
        name: 'Bob',
        age: 18,
        city: 'Metuchen'
    }
    function setUser(obj){
        let str = "";
        for(let item in obj)
            str += (item.toUpperCase() + ": " + obj[item] + "  ");
       setContent(str);
    }
    return (
        <div>
            <button onClick = {() => setUser(user1)}>user_one</button>
            <button onClick = {() => setUser(user2)}>user_two</button>
            <h1>{content}</h1>
        </div>
    );
}

export {Navigation};