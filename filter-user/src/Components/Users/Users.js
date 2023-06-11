import React, { useEffect, useState } from 'react'
import './Users.css';

export const Users = () => {
    const [users, setUsers] = useState([])
    const [allUsers, setAllUsers] = useState([])

    useEffect(()=>{
        fetch("https://randomuser.me/api/?results=20")
        .then((res)=>{
           return res.json()
        })
        .then((data)=>{
            
            setUsers(data.results)
            setAllUsers(data.results)
        })
    },[])

  return (
    <div className='users-container'>
        <div className='user-details'>
            <h2>Users Details</h2>
            <p>Duis minim ipsum anim quis commodo adipisicing ex Lorem amet. Magna commodo do et consequat laboris. Aute aliquip officia sunt do ex culpa laboris aliquip veniam elit et. Eiusmod officia dolore nisi eiusmod labore labore culpa magna sit commodo eiusmod sunt. Ullamco reprehenderit in pariatur consequat aute commodo ea non consectetur enim aliquip exercitation do amet. Pariatur dolore sit irure aliqua elit laboris ex do laborum sint occaecat veniam. Consectetur fugiat eiusmod officia officia.</p>
        </div>
        {
            users.length > 0 && 
            <div className='filter-radio-box'>
                <input type='radio' 
                        name='gender' 
                        value="All" 
                        defaultChecked
                        onChange={()=>{
                            setUsers(allUsers)
                        }}
                        /><span>ALL</span>
                <input type='radio' 
                    name='gender' 
                    value="MALE" 
                        onChange={()=>{
                            const data = allUsers.filter((ele)=>{
                                return ele.gender === "male"
                            })
                            setUsers(data)
                        }}
                    /><span>MALE</span>
                <input type='radio' 
                    name='gender' 
                    value="FEMALE" 
                    onChange={()=>{
                            const data = allUsers.filter((ele)=>{
                                return ele.gender === "female"
                            })
                            setUsers(data)
                    }}
                    /><span>FEMALE</span>
            </div>
        }
        {
            users.length > 0 && 
            <div className='table-div'>
                <table style={{
                    textAlign:"left",
                    width:'100%'
                }} >
                    <thead style={{
                        backgroundColor:"black",
                        color:"#fff",
                    }}>
                        <tr>
                            <th style={{padding:"10px",fontWeight:"400"}}>IMAGE</th>
                            <th style={{padding:"10px",fontWeight:"400"}}>NAME</th>
                            <th style={{padding:"10px",fontWeight:"400"}}>EMAIL</th>
                            <th style={{padding:"10px",fontWeight:"400"}}>GENDER</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((ele)=>{
                                return <tr>
                                    <td style={{textAlign:"center"}}><img src={ele.picture.large} alt="user" width={100} height={100}/></td>
                                    <td>{ele.name.first}</td>
                                    <td>{ele.email}</td>
                                    <td>{ele.gender}</td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
        </div>
        }
    </div>
  )
}
