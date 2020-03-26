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
        ?  <StudentInfo_table />
        : <p>default</p>
      }
        <ClickShow />
        </React.Fragment>
    );
}

function renderTableHeader() {
   return (
        <tr>
            <th>Name</th>
            <th>Age</th>
            <th>E-mail</th>
        </tr>
   );
 }

function renderTableData() {
    let students = [
        { id: 1, name: 'alex', age: 21, email: 'wasif@email.com' },
        { id: 2, name: 'bob', age: 19, email: 'ali@email.com' },
        { id: 3, name: 'cavin', age: 16, email: 'saad@email.com' },
        { id: 4, name: 'david', age: 25, email: 'asad@email.com' }
     ];

    return students.map((student, index) => {
       const { id, name, age, email } = student;
       return (
          <tr key={id}>
             <td>{name}</td>
             <td>{age}</td>
             <td>{email}</td>
          </tr>
       )
    })
 }

function StudentInfo_table(){
     return (
        <div>
           <h1>Student Info</h1>
           <table id = 'students'>
                {renderTableHeader()}
                {renderTableData()}
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