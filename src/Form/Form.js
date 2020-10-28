import React, { useState } from "react";
import './Form.css';

const Form=()=>{
  const [firstName,setFirstName]=useState('');
  const [lastName,setLastName]=useState('');
  const [mailId,setMailId]=useState('');
  const [contactNumber,setContactNumber]=useState('');
  const [message,setMessage]=useState('');
  const [text,setText]=useState('');
  const[check,setCheck]=useState('');
const onSub=(x)=>{
  const values={
    name:{
      fName:firstName,
    lName:lastName
    },
    mail:mailId,
    contactno:contactNumber,
    mess:message,
    textt:text,
    checkk:check
  }
  // alert(firstName)
//   console.log(firstName)
//   console.log(lastName)
//   console.log(mailId)
//   console.log(contactNumber)
//   console.log(message)
//  console.log(text)
//  console.log(check)
console.log(values)
}
    return(
<div className="body">
      

      <h2>Get in Touch</h2>
      <div className="main">
        <select>
          <option value="" hidden>select</option>
          <option value="request">Request</option>
          <option value="send">Send</option>
          <option value="other">Other</option>
        </select>
        <div className="name">
          <input value={firstName} onChange={e=>setFirstName(e.target.value)} type="text" placeholder="first name" />
          <input value={lastName} onChange={e=>setLastName(e.target.value)}type="text" placeholder="last name" />
        </div>
        <div className="name">
          <input value={mailId} onChange={e=>setMailId(e.target.value)} type="text" placeholder="mail id" />
          <input value={contactNumber} onChange={e=>setContactNumber(e.target.value)} type="text" placeholder="contact number" />
        </div>
        <div className="message">
          <input value={message} onChange={e=>setMessage(e.target.value)} type="text" placeholder="message" />
        </div>
        <textarea value={text} onChange={e=>setText(e.target.value)} rows="10" cols="40" placeholder="give relevant details about you in this context">
         
  </textarea>
  <div className="agreement">
    
  <input value={check} onChange={e=>setCheck(e.target.checked)} type="checkbox"  id="vehicle1" name="vehicle1"/> 
  <label > I have agreed with the &nbsp;
  <a href= "www.google.com">terms and conditions </a></label>
  </div>
  <div className="final">
    <button onClick={E=>onSub(E)} >submit</button>
    <button >request</button>
  </div>
      </div>

      

    </div>
    )
    }
    export default Form;