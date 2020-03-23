import React, { Component } from "react";
import { Formik } from "formik";
import Form from "./form";
import * as Yup from 'yup'
import axios from '../../../axios'
import {signup} from '../../../store/actions'
import {connect} from 'react-redux'
import withErrorHand from '../../../hoc/withErrorHand'


class Signup extends Component {
 constructor(props) {
   super(props);
   this.state = {};
 }

 render() {

    const values = { email: "", password: "" };

    const validationSchema = Yup.object({
        email: Yup.string("Enter your email")
        .email("Enter a valid email")
        .required("Email is required"),
        password: Yup.string("")
        .min(6, "Password must contain at least 6 characters")
        .required("Enter your password")
    })

   return (
           <Formik
             initialValues={values}
            validateOnMount={true}
             validationSchema={validationSchema}             
           >
            {props =>  <Form {...props} signup={this.props.signup} />}
           </Formik>
   );
 }
}

const mapDispatchToProps = dispatch => {
  return {
      signup: (email, password, name) => dispatch(signup(email, password, name))
  }
}

export default connect(null,mapDispatchToProps)(withErrorHand(Signup, axios))
