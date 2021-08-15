import React, { Component } from "react"
import { Link } from "react-router-dom"

class Register extends Component {
    constructor(){
        super()
        this.state ={
            name: "",
            email: "",
            password: "",
            password2: "",
            errors: {}
        }
    }

    onChange = e => {
        e.preventDefault()
    }

    onSubmit = e => {
        e.preventDefault()

        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2
        }
    }
}
export default Register