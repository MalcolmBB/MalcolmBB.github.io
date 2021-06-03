import React from 'react';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import TextField from  '@material-ui/core/TextField';
import Button from '../../Button/Button';
import "./ContactMe.css";
import * as emailjs from 'emailjs-com';

var validator = require("email-validator");
const nameErrorConst = "Please enter your full name";
const emailErrorConst = "Invalid email address"
const messageErrorConst = "Please enter a message";

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
        document.activeElement.blur();
        if ((this.state.name !=="" && this.state.name !=="-1") &&
        (validator.validate(this.state.email) && (this.state.email !=="default@default.com")) &&
        (this.state.message !=="" && this.state.message !=="-1")){
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
        }
        else {
            if (this.state.name ==="-1"){
                this.setState({
                    name:"",
                    nameError:nameErrorConst
                })
            }
            if (this.state.message ==="-1"){
                this.setState({
                    message:"",
                    messageError:messageErrorConst
                })
            }
            if (this.state.email === "default@default.com"){
                this.setState({
                    email:"",
                    emailError:emailErrorConst
                })
            }
            if (this.state.name ==="" || this.state.name ==="-1"){
                this.nameField.focus();
            }
            else if (!validator.validate(this.state.email) || this.state.email ==="default@default.com"){
                this.emailField.focus();
            }
            else if (this.state.message ==="" || this.state.message ==="-1"){
                this.messageField.focus();
            }
        }
    };

  resetForm() {
    this.setState({
        name: "-1",
        nameError: "",
        email:"default@default.com",
        emailError:"",
        message: "-1",
        messageError:"",
        defaultName: "",
        defaultEmail:"",
        defaultMessage:""
    });
  }

    render(){
        return (
            <div>
                <Header></Header>
                <div className="mainContactContainer">
                    <div className="contactContainer">
                        <h2 className="contactHeader">Please enter your details and message below</h2>
                        <form onSubmit={this.handleSubmit}>
                            <TextField
                                inputProps={{style:{fontSize:"var(--inputFontSize)"}}}
                                InputLabelProps={{style:{fontSize:"var(--inputFontSize)"}}}
                                inputRef={nameField => (this.nameField = nameField)}
                                value={this.state.defaultName}
                                label="Full Name"
                                fullWidth
                                autoComplete="none"
                                onChange={(e) => {
                                    if (e.target.value === ""){
                                        this.setState({name:e.target.value, nameError:nameErrorConst, defaultName:e.target.value})
                                    }
                                    else{
                                        this.setState({name:e.target.value, defaultName:e.target.value, nameError:""})
                                    }
                                }}
                                error={this.state.name === ""}
                                helperText={this.state.nameError}
                            />
                        <TextField
                            inputProps={{style:{fontSize:"var(--inputFontSize)"}}}
                            InputLabelProps={{style:{fontSize:"var(--inputFontSize)"}}}
                            inputRef={emailField => (this.emailField = emailField)}
                            type={"email"}
                            value={this.state.defaultEmail}
                            label="Email"
                            fullWidth
                            autoComplete="none"
                            onChange={(e) => {
                                this.setState({defaultEmail:e.target.value})
                            }}
                            onBlur={(e) => {
                                if (!validator.validate(e.target.value)){
                                    this.setState({email:e.target.value, emailError:emailErrorConst, defaultEmail:e.target.value})
                                }
                                else{
                                    this.setState({email:e.target.value, defaultEmail:e.target.value, emailError:""})
                                }
                            }}
                            error={!validator.validate(this.state.email)}
                            helperText={this.state.emailError}
                            />
                        <TextField
                            inputProps={{style:{fontSize:"var(--inputFontSize)", lineHeight:"var(--inputFontSize)"}}}
                            InputLabelProps={{style:{fontSize:"var(--inputFontSize)"}}}
                            inputRef={messageField => (this.messageField = messageField)}
                            className="messageField"
                            value={this.state.defaultMessage}
                            label="Message"
                            spellCheck
                            fullWidth
                            multiline
                            rows={8}
                            autoComplete="none"
                            onChange={(e) => {
                                if (e.target.value === ""){
                                    this.setState({message:e.target.value, messageError:messageErrorConst, defaultMessage:e.target.value})
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
                </div>
                <Footer></Footer>
            </div>
        );
    }
}

export default ContactMe;
