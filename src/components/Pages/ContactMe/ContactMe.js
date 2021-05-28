import React from 'react';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import TextField from  '@material-ui/core/TextField';
import Button from '../../Button/Button';
import "./ContactMe.css";
import * as emailjs from 'emailjs-com';

var validator = require("email-validator");

class ContactMe extends React.Component {
    constructor(){
        super()
        this.state = {
            name: "-1",
            nameError: "",
            email:"default@default.com",
            emailError:"",
            message: "-1",
            messageError:"",
            defaultName: "",
            defaultEmail:"",
            defaultMessage:""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.resetForm = this.resetForm.bind(this);
    }

    handleSubmit(event) {
    event.preventDefault();
    const { name, email, message } = this.state;
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'Malcolm Baatjies',
      message_html: message,
    };
    emailjs.send(
        'service_x3cxr0m',
        'template_7y5fvdu',
        templateParams,
        'user_NigdOEjlWhj5f3Jjv5Vw3'
    )
    this.resetForm();
  };

  resetForm() {
    this.setState({
      name: '-1',
      email: 'default@default.com',
      message: '-1',
      defaultName: "",
      defaultEmail: "",
      defaultMessage: "",
    });
  }

    render(){
        return (
            <div>
                <Header></Header>
                    <div className="contactContainer">
                        <h2 className="contactHeader">Please enter your details and message below</h2>
                        <form onSubmit={this.handleSubmit}>
                            <TextField value={this.state.defaultName} label="Full Name" fullWidth autoComplete="name"
                                onChange={(e) => {
                                    if (e.target.value === ""){
                                        this.setState({name:e.target.value, nameError:"Please enter a valid name.", defaultName:e.target.value})
                                    }
                                    else{
                                        this.setState({name:e.target.value, defaultName:e.target.value, nameError:""})
                                    }
                                }}
                                error={this.state.name === ""}
                                helperText={this.state.nameError}
                            />
                        <TextField value={this.state.defaultEmail} label="Email" fullWidth autoComplete="email"
                                onChange={(e) => {
                                    this.setState({defaultEmail:e.target.value})
                                }}
                                onBlur={(e) => {
                                    if (!validator.validate(e.target.value)){
                                        this.setState({email:e.target.value, emailError:"Invalid email", defaultEmail:e.target.value})
                                    }
                                    else{
                                        this.setState({email:e.target.value, defaultEmail:e.target.value, emailError:""})
                                    }
                                }}
                                error={!validator.validate(this.state.email)}
                                helperText={this.state.emailError}
                            />
                        <TextField value={this.state.defaultMessage} label="Message" fullWidth multiline rows={8} autoComplete="none"
                                onChange={(e) => {
                                    if (e.target.value === ""){
                                        this.setState({message:e.target.value, messageError:"Please enter a valid message.", defaultMessage:e.target.value})
                                    }
                                    else{
                                        this.setState({message:e.target.value, defaultMessage:e.target.value, messageError:""})
                                    }
                                }}
                                error={this.state.message === ""}
                                helperText={this.state.messageError}
                            />
                        <Button
                            type="Submit"
                            className="button bSubmit"
                            value="Submit"
                            onClick={this.handleSubmit}
                        ></Button>
                        </form>
                    </div>
                <Footer></Footer>
            </div>
        );
    }
}

export default ContactMe;
