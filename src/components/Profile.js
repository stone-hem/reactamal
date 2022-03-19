import { Form, Button, Row, Col } from 'react-bootstrap'
import Header from './Header';

function Profile() {
    return (
        <div className="App">
            <Header />
            <br />
            <br />
            <form>
                <div className='col-md-6'>
                    <div class="form-group">
                        <label >First Name</label>
                        <input type="text" class="form-control" placeholder="Enter you first name" />
                    </div>
                    <div class="form-group">
                        <label >Last Name</label>
                        <input type="text" class="form-control" placeholder="Enter you last name" />
                    </div>
                    <div class="form-group">
                        <label >Phone Number</label>
                        <input type="text" class="form-control" placeholder="Enter you phone number" />
                    </div>
                    <div class="form-group">
                        <label >Email</label>
                        <input type="email" class="form-control" placeholder="Enter you email" />
                    </div>
                    <div class="form-group">
                        <label >Citizenship</label>
                        <input type="text" class="form-control" placeholder="Enter you citizenship" />
                    </div>
                    <div class="form-group">
                        <label >Upload Copy of id</label>
                        <input type="file" class="form-control" placeholder="upload id copy" />
                    </div>
                    <div class="form-group">
                        <label >Upload Copy of Kra</label>
                        <input type="file" class="form-control" placeholder="upload kra copy" />
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </div>

            </form>
        </div>
    );
}

export default Profile
