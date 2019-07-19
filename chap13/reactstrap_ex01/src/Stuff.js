import React, {Component} from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Stuff.scss'

class Stuff extends Component {
    render(){
        return(
            <Form className="stuff-form">
                <h1 className="text-center">
                    carHistory.com
                </h1>
                <h3 className="text-center">Welcome!!!</h3>
                <FormGroup>
                    <Label>Email</Label>
                    <Input type="email" placeholder="E-mail"></Input>
                </FormGroup>
                <FormGroup>
                    <Label>Password</Label>
                    <Input type="password" placeholder="Password"></Input>
                </FormGroup>
                <Button className="btn btn-lg btn-dark btn-block">로그인</Button>
                <div className="text-center mt-3">
                <a href="/sign-up">회원가입</a>
                <span>|</span>
                <a href="/forgatPassword">패스워드분실</a>
            </div>
            </Form>
            
           
        )
    }
        
}

export default Stuff;