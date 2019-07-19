import React, { Component } from 'react';
import {Table} from 'react';
import axios from 'axios';
class CarList extends Component {
    constructor(props){
        super(props);

        this.state={
            carNumber :'...',
            owner:'....'
        }
    }

   /* 
   프로미스 => 성공이면 then, 실패면 catch
   ex)

   let promise1 = new Promise((resolve, reject) =>{
        if(condition) {
            resolve('success');
        } else{
            reject('fail');
        }
    });

    promise1 //첫번째 비동기 함수
        .then((message) => {
            console.log(message);
            ansycFunc(2);// 두번째 비동기 함수
        })
        .then(message =>{
            ansycFunc(2);// 세번째 비동기 함수
        })
        .catch((error)=>{
            console.error(error);//error가 나면 실행됨   
        })

        */


    componentDidMount() {
        fetch('http://70.12.50.160:5001/api/carlist')
            .then(response=>{
                console.log('succes');
               // console.log(response);
                
                return response.json();
            })
            .then(json =>{
                console.log(json);

                this.setState({
                    carNumber : json[0].carNumber,
                    owner: json[0].owner
                })
                
            })
            .catch(error =>{
                console.log('fail');
                //console.error(error);
            
             })
    }

    render() {
        return (
            <div>
                <ul>
                <h1>차량조회</h1>
                <li>{this.state.carNumber}</li>
                <li>{this.state.owner}</li>
                </ul>
            </div>
        );
    }
}


export default CarList;