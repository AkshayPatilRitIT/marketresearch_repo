import React, { Component } from 'react'
import './ContactUs.css'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from "yup";
import Country from '../../Report/Component/Country.json'

const SignupSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Too Short!')
        .max(70, 'Too Long!')
        .required('Required'),
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
});

export default class ContactUs extends Component {
    render() {
        return (
            <div className="Landing__contactus__wrapper">
                <div className="Landing__contactus__container">
                    <div className="Landing__contactus__block">
                        <div className="Landing__contactus__left">
                            <div className="Landing__contactus__title">Nisi quis magna duis voluptate sint aute ex duis ea tempor.</div>
                            <div className="Landing__contactus__subtitle">Nisi Incididunt nostrud laborum ex non nisi adipisicing voluptate eu incididunt eiusmod. quis magna duis voluptate sint aute ex duis ea tempor.</div>

                        </div>
                        <div className="Landing__contactus__right">
                            <div className="Landing__contactus__right__wrapper">
                                <div className="Landing__contactus__right__title">LET'S TALK</div>
                                <div className="Landing__contactus__form">
                                    <div>

                                        <Formik
                                            initialValues={{
                                                name: '',
                                                email: '',
                                                company__name: '',
                                                country: '',
                                                no: '',
                                                message: ''
                                            }}
                                            validationSchema={SignupSchema}
                                            onSubmit={values => {
                                                // same shape as initial values
                                                console.log(values);
                                            }}
                                        >
                                            {({ errors, touched }) => (
                                                <Form>
                                                    <div className="Landing__contactus__form__two__field">
                                                        <div>
                                                            <Field className="Landing__contactus__form__field" placeholder="Your name*" name="name" />
                                                            {errors.name && touched.name ? (
                                                                <div style={{ color: "red" }}>{errors.name}</div>
                                                            ) : null}
                                                        </div>
                                                        {/* <ErrorMessage name="name" /> */}
                                                        <div>
                                                            <Field className="Landing__contactus__form__field" placeholder="Business email*" name="email" type="email" />
                                                            {errors.email && touched.email ? (
                                                                <div style={{ color: "red" }}>{errors.email}</div>
                                                            ) : null}
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <Field className="Landing__contactus__form__field__single" placeholder="Company*" name="company__name" />
                                                        {errors.company__name && touched.company__name ? (
                                                            <div style={{ color: "red" }}>{errors.company__name}</div>
                                                        ) : null}
                                                    </div>

                                                    <div className="Landing__contactus__form__two__field">
                                                        <div>
                                                            {/* <Field className="Landing__contactus__form__field" placeholder="Your name*" name="country" /> */}
                                                            <select className="Landing__contactus__form__field"
                                                                onChange={handleChange}
                                                                onBlur={handleBlur}
                                                                name="country">
                                                                <option hidden>select country</option>
                                                                {Country.map((obj) => (
                                                                    <option >{obj.name}</option>
                                                                ))}
                                                            </select>
                                                            {errors.country && touched.country ? (
                                                                <div style={{ color: "red" }}>{errors.country}</div>
                                                            ) : null}
                                                        </div>
                                                        {/* <ErrorMessage name="name" /> */}
                                                        <div>
                                                            <Field className="Landing__contactus__form__field" placeholder="Phone" name="email" type="no" />
                                                            {errors.no && touched.no ? (
                                                                <div>{errors.no}</div>
                                                            ) : null}
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <Field component="textarea" className="Landing__contactus__form__field__single" placeholder="Message*" name="message" />
                                                        {errors.message && touched.message ? (
                                                            <div style={{ color: "red" }}>{errors.message}</div>
                                                        ) : null}
                                                    </div>
                                                    {/* <ErrorMessage name="email" /> */}
                                                    <div className="Landing__contactus__form__btn__wrapper">
                                                        <button type="submit" className="Landing__contactus__form__btn">Submit</button>
                                                    </div>
                                                </Form>
                                            )}
                                        </Formik>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
