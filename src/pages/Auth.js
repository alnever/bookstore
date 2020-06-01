import React, { useState } from 'react'
import { Alert, FormGroup, Label, Input, Button } from 'reactstrap'
import { useDispatch } from 'react-redux'
import { userLogin } from '../store/actions/UserActions'
export const Auth = () => {
    const dispatch = useDispatch()

    let [user,setUser] = useState({
        username: "",
        password: ""
    })

    console.log(user);

    return (
        <div className='container-sm'>
            <Alert color="danger">Authorization is required</Alert>
            <FormGroup>
                <Label for="username">User name</Label>
                <Input id="username" value={user.username} onChange={ (e) => setUser ({
                    ...user,
                    username: e.target.value
                })}></Input>
            </FormGroup>
            <FormGroup>
                <Label for="password">Password</Label>
                <Input id="password" value={user.password} onChange={ (e) => setUser ({
                    ...user,
                    password: e.target.value
                })}/>
            </FormGroup>
            <Button color="sucess" onClick={ () => { dispatch(userLogin(user))}}>Login</Button>
        </div>
        
    )
}