import React from 'react'
import axios from 'axios'
import { useState } from 'react'


export default function UserList() {
    const [data, setData] = useState([])
    const url = 'https://jsonplaceholder.typicode.com/users'
    const getAllName = ()=>{
        axios.get(`${url}`).then(function(response){
            setData(response.data)
           // console.log(data);
        })
        .catch(error => console.error(`Error : ${error}`))
    }

    getAllName()
    
    return (
        <div className='container d-flex justify-content-center flex-wrap'>
            {
                data.map(ok=>(<ul className='alert alert-success' style={{width:'350px', padding:'25px',margin:'50px'}}><li>Nom: {ok.name} {ok.username}</li>
                            <li>Email: {ok.email}</li>
                            <li>Ville: {ok.address.city}</li>
                            </ul>
                    ))
            }
        </div>
    )
}
