import React, { Component } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";

import "../Report.css"

import { storeInqueryData } from '../../../Service/storeInqueryData'
import Country from "./Country.json"

const SignupSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Too Short!')
        .max(70, 'Too Long!')
        .required('Required'),
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
    phone: Yup.string()

        .required('Required'),
    company: Yup.string()

        .required('Required'),
    designation: Yup.string()

        .required('Required'),

});
export default class Inquery extends Component {
    render() {

        return (
            <div style={{ margin: "30px" }}>
                <div className="Report__inquery__title">Inquiry Before Buying</div>
                <div className="Report__inquery__wrapper">
                    <Formik
                        initialValues={{
                            company: "",
                            country: "",
                            designation: "",
                            email: "",
                            message: "",
                            name: "",
                            phone: "",


                        }}
                        validationSchema={SignupSchema}
                        onSubmit={async values => {
                            let data = {
                                company: values.company,
                                country: values.country,
                                designation: values.designation,
                                email: values.email,
                                message: values.message,
                                name: values.name,
                                phone: values.phone,
                            }

                            let result = await storeInqueryData(data)
                            if (result.status === 200) {
                                alert("data inserted successfully")
                                values.name = ""
                                values.email = ""
                                values.phone = ""
                                values.company = ""
                                values.country = ""
                                values.message = ""
                                values.country = ""
                                values.designation = ""
                            }
                        }
                        }
                    >
                        {({ errors, touched, handleChange, handleBlur }) => (
                            <Form>

                                <div className="Report__field__body">
                                    <div className="Report__field__body__label">
                                        <label>Name</label>
                                    </div>
                                    <div className="Report__field__body__input">
                                        <Field name="name" placeholder="Name" className="Report__iquery__field" />
                                        {errors.name && touched.name ? (
                                            <div className="Report__iquery__error">{errors.name}</div>
                                        ) : null}
                                    </div>
                                </div>
                                <div className="Report__field__body">
                                    <div className="Report__field__body__label">
                                        <label>Email</label>
                                    </div>
                                    <div className="Report__field__body__input">
                                        <Field name="email" type="email" placeholder="Email" className="Report__iquery__field" />
                                        {errors.email && touched.email ? (
                                            <div className="Report__iquery__error">{errors.email}</div>
                                        ) : null}
                                    </div>
                                </div>
                                <div className="Report__field__body">
                                    <div className="Report__field__body__label">
                                        <label>Phone</label>
                                    </div>
                                    <div className="Report__field__body__input">
                                        <Field name="phone" placeholder="Phone" className="Report__iquery__field" />
                                        {errors.phone && touched.phone ? (
                                            <div className="Report__iquery__error">{errors.phone}</div>
                                        ) : null}
                                    </div>
                                </div>
                                <div className="Report__field__body">
                                    <div className="Report__field__body__label">
                                        <label>Name of the Company</label>
                                    </div>
                                    <div className="Report__field__body__input">
                                        <Field name="company" placeholder="Name of the Company" className="Report__iquery__field" />
                                        {errors.company && touched.company ? (
                                            <div className="Report__iquery__error">{errors.company}</div>
                                        ) : null}
                                    </div>
                                </div>
                                <div className="Report__field__body">
                                    <div className="Report__field__body__label">
                                        <label>Title/Designation</label>
                                    </div>
                                    <div className="Report__field__body__input">
                                        <Field name="designation" placeholder="designation/Designation" className="Report__iquery__field" />
                                        {errors.designation && touched.designation ? (
                                            <div className="Report__iquery__error">{errors.designation}</div>
                                        ) : null}
                                    </div>
                                </div>
                                <div className="Report__field__body">
                                    <div className="Report__field__body__label">
                                        <label>Country Name</label>
                                    </div>
                                    <div className="Report__field__body__input">
                                        <select className="Report__iquery__field__select"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            name="country">
                                            <option hidden>Select</option>
                                            {Country.map((obj) => (
                                                <option >{obj.name}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <div className="Report__field__body">
                                    <div className="Report__field__body__label">
                                        <label>How can we help you?</label>
                                    </div>
                                    <div className="Report__field__body__input">
                                        <Field name="message" placeholder="type here" component="textarea" className="Report__iquery__field" />
                                        {errors.message && touched.message ? (
                                            <div className="Report__iquery__error">{errors.message}</div>
                                        ) : null}
                                    </div>
                                </div>
                                {/* <Field name="email" type="email" />
                                {errors.email && touched.email ? (
                                    <div className="Report__iquery__error">{errors.email}</div>
                                ) : null} */}
                                <div style={{ textAlign: "center", marginTop: "30px" }}>
                                    <button type="submit" className="Report__iquery__btn">Submit</button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div >
            </div >
        )
    }
}
