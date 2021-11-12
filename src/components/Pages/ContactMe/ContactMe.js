import React, { useEffect, useState, useRef } from 'react';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import TextField from  '@material-ui/core/TextField';
import Button from '../../Button/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import "./ContactMe.css";
import * as emailjs from 'emailjs-com';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

var validator = require("email-validator");
const nameErrorConst = "Please enter your full name";
const emailErrorConst = "Invalid email address"
const messageErrorConst = "Please enter a message";

function ContactMe() {

    const nameField = useRef(null);
    const emailField = useRef(null);
    const messageField = useRef(null);

    const [contactState, setContactState] = useState({
        name: "-1",
        nameError: "",
        email:"default@default.com",
        emailError:"",
        message: "-1",
        messageError:"",
        defaultName: "",
        defaultEmail:"",
        defaultMessage:"",
        open:false,
        matches: window.matchMedia("(max-width:768px)").matches
    });

    useEffect(() => {
        const handler = e => setContactState({matches: e.matches});
        window.matchMedia("(max-width: 768px)").addListener(handler);
    }, []);

    const handleSubmit = (event) => {
        document.activeElement.blur();
        if ((contactState.name !=="" && contactState.name !=="-1") &&
        (validator.validate(contactState.email) && (contactState.email !=="default@default.com")) &&
        (contactState.message !=="" && contactState.message !=="-1")){
            event.preventDefault();
            const { name, email, message } = contactState;
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
            setContactState({...contactState, open:true});
            resetForm();
        }
        else {
            let {tempName, tempMessage, tempEmail} = ["NAME", "MESSAGE", "EMAIL"];
            if (contactState.name === "-1" || contactState.name === ""){
                tempName = "";
            }
            if (contactState.message === "-1" || contactState.message === ""){
                tempMessage = "";
            }
            if (contactState.email === "default@default.com"){
                tempEmail = "";
            }

            setContactState({
                ...contactState,
                name: tempName,
                nameError: (tempName === "") ? nameErrorConst : "",
                message: tempMessage,
                messageError: (tempMessage === "") ? messageErrorConst : "",
                email: tempEmail,
                emailError: (tempEmail === "") ? emailErrorConst : "",
            })
            if (contactState.name ==="" || contactState.name ==="-1"){
                nameField.current.focus();
            }
            else if (!validator.validate(contactState.email) || contactState.email ==="default@default.com"){
                emailField.current.focus();
            }
            else if (contactState.message ==="" || contactState.message ==="-1"){
                messageField.current.focus();
            }
        }
    };

    const resetForm = () => {
        setTimeout(() => {
            setContactState({
                ...contactState,
                name: "-1",
                nameError: "",
                email:"default@default.com",
                emailError:"",
                message: "-1",
                messageError:"",
                defaultName: "",
                defaultEmail:"",
                defaultMessage:"",
                open: false,
            });
        }, 1200);
    }


    if (contactState.matches){
        return (
            <div>
                <Header></Header>
                <SimpleBar style={{ height: '100vh'}} forceVisible="y" autoHide={false}>
                    <div className="mainContactContainer">
                        <div className="contactContainer">
                            <h2 className="contactHeader">Please enter your details and message below</h2>
                            <form onSubmit={(e) => {handleSubmit(e)}}>
                                <TextField
                                    inputProps={{style:{fontSize:"var(--inputFontSize)"}}}
                                    InputLabelProps={{style:{fontSize:"var(--inputFontSize)"}}}
                                    FormHelperTextProps={{style:{fontSize:"calc(var(--inputFontSize)*0.7)"}}}
                                    inputRef={nameField}
                                    value={contactState.defaultName}
                                    label="Full Name"
                                    fullWidth
                                    autoComplete="name"
                                    onChange={(e) => {
                                        if (e.target.value === ""){
                                            setContactState({...contactState, name:e.target.value, nameError:nameErrorConst, defaultName:e.target.value})
                                        }
                                        else{
                                            setContactState({...contactState, name:e.target.value, defaultName:e.target.value, nameError:""})
                                        }
                                    }}
                                    error={contactState.name === ""}
                                    helperText={contactState.nameError}
                                />
                            <TextField
                                inputProps={{style:{fontSize:"var(--inputFontSize)"}}}
                                InputLabelProps={{style:{fontSize:"var(--inputFontSize)"}}}
                                FormHelperTextProps={{style:{fontSize:"calc(var(--inputFontSize)*0.7)"}}}
                                inputRef={emailField}
                                type={"email"}
                                autoComplete='email'
                                value={contactState.defaultEmail}
                                label="Email"
                                fullWidth
                                onChange={(e) => {
                                    setContactState({...contactState, defaultEmail:e.target.value})
                                }}
                                onBlur={(e) => {
                                    if (!validator.validate(e.target.value)){
                                        setContactState({...contactState, email:e.target.value, emailError:emailErrorConst, defaultEmail:e.target.value})
                                    }
                                    else{
                                        setContactState({...contactState, email:e.target.value, defaultEmail:e.target.value, emailError:""})
                                    }
                                }}
                                error={!validator.validate(contactState.email)}
                                helperText={contactState.emailError}
                                />
                            <TextField
                                inputProps={{style:{fontSize:"var(--inputFontSize)", lineHeight:"var(--inputFontSize)"}}}
                                InputLabelProps={{style:{fontSize:"var(--inputFontSize)"}}}
                                FormHelperTextProps={{style:{fontSize:"calc(var(--inputFontSize)*0.7)"}}}
                                inputRef={messageField}
                                className="messageField"
                                value={contactState.defaultMessage}
                                label="Message"
                                spellCheck
                                fullWidth
                                multiline
                                rows={8}
                                autoComplete="none"
                                onChange={(e) => {
                                    if (e.target.value === ""){
                                        setContactState({...contactState, message:e.target.value, messageError:messageErrorConst, defaultMessage:e.target.value})
                                    }
                                    else{
                                        setContactState({...contactState, message:e.target.value, defaultMessage:e.target.value, messageError:""})
                                    }
                                }}
                                error={contactState.message === ""}
                                helperText={contactState.messageError}
                                />
                            <Button
                                type="Submit"
                                className="button bSubmit"
                                value="Submit"
                                onClick={(e) => {
                                    handleSubmit(e)
                                }}
                            ></Button>
                            </form>
                        </div>
                        <Dialog open={contactState.open}>
                            <DialogTitle className="DialogTitle">Your message has been sent!</DialogTitle>
                        </Dialog>
                    </div>
                    <Footer></Footer>
                </SimpleBar>
            </div>
        );
    } else {
        return (
            <div>
                <Header></Header>
                <SimpleBar style={{ height: '100vh'}} forceVisible="y" autoHide={false}>
                    <div className="mainContactContainer">
                        <div className="contactContainer">
                            <h2 className="contactHeader">Please enter your details and message below</h2>
                            <form onSubmit={(e) => {handleSubmit(e)}}>
                                <TextField
                                    inputProps={{style:{fontSize:"var(--inputFontSize)"}}}
                                    InputLabelProps={{style:{fontSize:"var(--inputFontSize)"}}}
                                    FormHelperTextProps={{style:{fontSize:"calc(var(--inputFontSize)*0.7)"}}}
                                    inputRef={nameField}
                                    value={contactState.defaultName}
                                    label="Full Name"
                                    fullWidth
                                    autoComplete="name"
                                    onChange={(e) => {
                                        if (e.target.value === ""){
                                            setContactState({...contactState, name:e.target.value, nameError:nameErrorConst, defaultName:e.target.value})
                                        }
                                        else{
                                            setContactState({...contactState, name:e.target.value, defaultName:e.target.value, nameError:""})
                                        }
                                    }}
                                    error={contactState.name === ""}
                                    helperText={contactState.nameError}
                                />
                            <TextField
                                inputProps={{style:{fontSize:"var(--inputFontSize)"}}}
                                InputLabelProps={{style:{fontSize:"var(--inputFontSize)"}}}
                                FormHelperTextProps={{style:{fontSize:"calc(var(--inputFontSize)*0.7)"}}}
                                inputRef={emailField}
                                type={"email"}
                                autoComplete='email'
                                value={contactState.defaultEmail}
                                label="Email"
                                fullWidth
                                onChange={(e) => {
                                    setContactState({...contactState, defaultEmail:e.target.value})
                                }}
                                onBlur={(e) => {
                                    if (!validator.validate(e.target.value)){
                                        setContactState({...contactState, email:e.target.value, emailError:emailErrorConst, defaultEmail:e.target.value})
                                    }
                                    else{
                                        setContactState({...contactState, email:e.target.value, defaultEmail:e.target.value, emailError:""})
                                    }
                                }}
                                error={!validator.validate(contactState.email)}
                                helperText={contactState.emailError}
                                />
                            <TextField
                                inputProps={{style:{fontSize:"var(--inputFontSize)", lineHeight:"var(--inputFontSize)"}}}
                                InputLabelProps={{style:{fontSize:"var(--inputFontSize)"}}}
                                FormHelperTextProps={{style:{fontSize:"calc(var(--inputFontSize)*0.7)"}}}
                                inputRef={messageField}
                                className="messageField"
                                value={contactState.defaultMessage}
                                label="Message"
                                spellCheck
                                fullWidth
                                multiline
                                rows={8}
                                autoComplete="none"
                                onChange={(e) => {
                                    if (e.target.value === ""){
                                        setContactState({...contactState, message:e.target.value, messageError:messageErrorConst, defaultMessage:e.target.value})
                                    }
                                    else{
                                        setContactState({...contactState, message:e.target.value, defaultMessage:e.target.value, messageError:""})
                                    }
                                }}
                                error={contactState.message === ""}
                                helperText={contactState.messageError}
                                />
                            <Button
                                type="Submit"
                                className="button bSubmit"
                                value="Submit"
                                onClick={(e) => {
                                    handleSubmit(e)
                                }}
                            ></Button>
                            </form>
                        </div>
                        <Dialog open={contactState.open}>
                            <DialogTitle className="DialogTitle">Your message has been sent!</DialogTitle>
                        </Dialog>
                    </div>
                    <Footer></Footer>
                </SimpleBar>
            </div>
        );
    }
}

export default ContactMe;
