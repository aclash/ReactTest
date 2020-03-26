import React, {useState, useEffect} from 'react';
import './venderTest.css'
function Navigation(){
    return (
        <React.Fragment>
        <div className="navbar">
            <a href="#">Home</a> 
            <a href="#">Search</a> 
            <a href="#">Student Info</a>
        </div>
        <StudentInfo_table />
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

export {Navigation};