import React, { Component } from 'react';
import {Table} from 'reactstrap';
import Car from './Car';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';

class CarList extends Component {
    constructor(props){
        super(props);

        this.state={
           carlist: []
        }
    }

        componentDidMount() {
            axios({
                //url: 'http://localhost:5002/api/carlist',
                url:'/api/carlist',//proxy설정
                method: 'get'
            })
            .then(response =>{
                console.log('success :', response);

                // let arr =[1,2,3,4,5];
                // let newArr = arr.map(num => num*2);

                let newList = response.data.map((c,index) => {
                    return (
              <Car key={index} carinfo={c} />
                    );
                })
                console.log(newList);
                
                this.setState({
                    carlist: newList
                })
                // console.log(carlist);
                
            })
        }
   
    render() {
        return (
            <div>
                <h1>차량조회</h1>
                <Table>
                    <thead>
                        <tr>
                        <th>차량번호</th>
                        <th>소유자</th>
                        <th>모델</th>
                        <th>회사</th>
                        <th>사고횟수</th>
                        <th>소유자 변경 횟수</th>
                        </tr>
                    </thead>
                  <tbody>
                     {this.state.carlist}
                  </tbody>
                </Table>
            </div>
        );
    }
}


export default CarList;