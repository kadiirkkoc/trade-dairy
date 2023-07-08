import React, { useEffect, useState } from "react";
import Main from "./Main";

export default function Register(props) {

    const [signUpForm, setSignUpForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        re_password: ""
    })


    const [isSubmitted, setIsSubmitted] = useState(false)

    function handleChange(event) {
        const { value, name } = event.target

        setSignUpForm(prevForm => {
            return {
                ...prevForm,
                [name]: value
            }
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(signUpForm)
        setIsSubmitted(true)
        props.setShowForm(true)
    }


    useEffect(function () {
        if (isSubmitted) {
            setSignUpForm({
                firstName: "",
                lastName: "",
                email: "",
                password: "",
                re_password: ""
            })
        }

        console.log("useEffect worked")
    }, [isSubmitted])

    return (

        <main>
            {
                props.showForm ?
                
                    (<form className="form" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="firstName"
                            placeholder="firstName"
                            onChange={handleChange}
                            value={signUpForm.firstName}
                            className="signup-input"
                        />

                        <input
                            type="text"
                            name="lastName"
                            placeholder="password"
                            onChange={handleChange}
                            value={signUpForm.lastName}
                            className="signup-input"

                        />

                        <input
                            type="text"
                            name="email"
                            placeholder="email"
                            onChange={handleChange}
                            value={signUpForm.email}
                            className="signup-input"

                        />

                        <input
                            type="password"
                            name="password"
                            placeholder="password"
                            onChange={handleChange}
                            value={signUpForm.password}
                            className="signup-input"

                        />
                        <input
                            type="password"
                            name="re_password"
                            placeholder="rePassword"
                            onChange={handleChange}
                            value={signUpForm.re_password}
                            className="signup-input"

                        />

                        <button 
                            className="submitBtn" 
                            onClick={() => setIsSubmitted(true)}>
                                Submit
                            </button>
                    </form>
                    )
                    :
                    (<button 
                        className="signUp" 
                        onClick={handleSubmit}
                    >
                        Sign up for free

                        {
                            <>
                                {isSubmitted ? <Main /> : "none"}
                            </>
                        }
                    </button>
                    )
            }
        </main>

    )
}