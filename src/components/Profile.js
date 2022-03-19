import Header from './Header';
import {useState} from 'react'

function Profile() {
    let userdata=JSON.parse(localStorage.getItem('user'))
    const [firstName, setFirst]=useState("");
    const [lastName, setLast]=useState("");
    const [phone_number, setPhone]=useState("");
    const [email, setEmail]=useState("");
    const [citizenship, setCitizen]=useState("");
    const [copyOfID, setCopyid]=useState("");
    const [kraPin, setKra]=useState("");
    // const [profileImage, setProfile]=useState("");

    async function Update(){
       
        console.log(userdata.user.id,'hey');
        // console.log(firstName,lastName,phone_number,email,citizenship,copyOfID,kraPin)

        const formData=new formData();
        formData.append('firstName',firstName);
        formData.append('lastName',lastName);
        formData.append('phone_number',phone_number);
        formData.append('email',email);
        formData.append('citizenship',citizenship);
        formData.append('copyOfID',copyOfID);
        formData.append('kraPin',kraPin);

        let result=await fetch("http://192.168.1.47:8000/api//user/update-profile/".userdata.user.id,{
            method: "POST",
            body: formData
        })
        alert('profile has been updated')
    }


    return (
        <div className="App">
            <Header />
            <br />
            <br />
   
                <div className='col-sm-3 offset-sm-3'>
                    <div className="form-group">
                        <label >First Name</label>
                        <input type="text" className="form-control"     onChange={(e) => setFirst(e.target.value)}   placeholder="Enter you first name" />
                    </div>
                    <div className="form-group">
                        <label >Last Name</label>
                        <input type="text" className="form-control"      onChange={(e) => setLast(e.target.value)}   placeholder="Enter you last name" />
                    </div>
                    <div className="form-group">
                        <label >Phone Number</label>
                        <input type="text" className="form-control"    onChange={(e) => setPhone(e.target.value)}   placeholder="Enter you phone number" />
                    </div>
                    <div className="form-group">
                        <label >Email</label>
                        <input type="email" className="form-control"     onChange={(e) => setEmail(e.target.value)}   placeholder="Enter you email" />
                    </div>
                    <div className="form-group">
                        <label >Citizenship</label>
                        <input type="text" className="form-control"    onChange={(e) => setCitizen(e.target.value)}   placeholder="Enter you citizenship" />
                    </div>
                    <div className="form-group">
                        <label >Upload Copy of id</label>
                        <input type="file" className="form-control"    onChange={(e) => setCopyid(e.target.files[0])}   placeholder="upload id copy" />
                    </div>
                    <div className="form-group">
                        <label >Upload Copy of Kra</label>
                        <input type="file" className="form-control"    onChange={(e) => setKra(e.target.files[0])}   placeholder="upload kra copy" />
                    </div>
                    <button type="submit" onClick={Update}   className="btn btn-success">Submit</button>
                </div>

   
        </div>
    );
}

export default Profile
