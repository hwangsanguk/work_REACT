import React, {Component} from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


class LoginForm extends Component {
    render(){
        return(
            <Form className="login-form">
                <h1 className="text-center">
                    carHistory.com
                </h1>
                <h3 className="text-center">SignUp</h3>
                <FormGroup>
                    <Label>Email</Label>
                    <Input type="email" placeholder="E-mail"></Input>
                </FormGroup>
                <FormGroup>
                    <Label>Id</Label>
                    <Input type="Id" placeholder="Id"></Input>
                </FormGroup>
                <FormGroup>
                    <Label>Password</Label>
                    <Input type="password" placeholder="Password"></Input>
                </FormGroup>
                <FormGroup>
                    <Label>BirthDay</Label>
                    <Input type="date" placeholder="Birthday"></Input>
                </FormGroup>
                <Button className="btn btn-lg btn-dark btn-block">회원가입</Button>
                <div className="text-center mt-3">
                <a href="/">홈으로</a>
                <span>|</span>
                <a href="/forgatPassword">패스워드분실</a>
            </div>
            </Form>
            
           
        )
    }
        
}

export default LoginForm;