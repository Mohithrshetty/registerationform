import React, { useState } from "react"
import './Student.css'

function Student() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    


    const handlesubmit = (e) => {
        e.preventDefault();

        const data ={
            name:name,
            email:email,
            phone:phone,
            
        };
        console.log(data);
    };
    return (
        <div class="container">
            <form onSubmit={handlesubmit}>
                <h2>STUDENT REGISTRATION FORM</h2>
                <caption>Please fill your details in the form</caption>
                <div class="content">
                <div class="input-box">
                    <label>NAME:</label>
                    <input type="text" value={name} onChange={(e)=> setName(e.target.value)} placeholder="Enter Your Name" required />
                    
                </div>
             


                <div class="input-box">
                    <label>MOBILE NO:</label>

                    <input type="text"  value={phone} onChange={(e)=> setPhone(e.target.value)} placeholder="Enter Your Phone number" required /><br />
                </div>


                <div class="input-box">


                    <label>USN:</label>

                    <input type="text"   pattern="\d[a-zA-Z]{2}\d{2}[a-zA-Z]{2}\d{3}" placeholder="Enter your USN" required />
                </div>
                <div class="input-box">
               
                    <label>BRANCH:</label>
                    <select name="dept" >
                        <option>CSE</option>
                        <option>ISE</option>
                        <option>CSD</option>
                        <option>EC</option>
                    </select>
                </div>
                <span class="title">GENDER:</span>
                <div class="gender">
                <input type="radio" name="Gender" id="male"/>
                <label>MALE</label>
                <input type="radio" name="Gender" id="female"/>
                <label>FEMALE</label>
              
                </div>


        

                <div class="input-box">        
                <label>EMAIL:</label>

                <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} placeholder="Enter Your email"required />
                </div>    
                <div class="input-box">        
                <label>ADDRESS:</label>

                <textarea name="address"  rows="2" cols="20" placeholder="Enter Your address" required ></textarea>
                </div>    
                <div class="button">
                    <button>REGISTER</button>
                </div>
                </div>


            </form>
        </div>    
    );
}

export default Student