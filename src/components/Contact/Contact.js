import React, { Component } from 'react'

import { Formik, Form, Field } from 'formik';
import * as Yup from "yup";
import "./Contact.css"

import Country from '../Report/Component/Country.json'

import { sendContactData } from '../../Service/sendContactData'

const SignupSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Too Short!')
        .max(70, 'Too Long!')
        .required('Required'),
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
});
export default class Contact extends Component {
    render() {
        return (
            <div>
                <div className="Categories__block">
                    <div className="Categories__block__title">
                        Contact us
                    </div>
                </div>

                <div className="Contact__wrapper">
                    <div className="Contact__container">
                        <div className="Contact__block">
                            <div className="Contact__block__left">
                                <div className="Contact__block__left__title">Send us a message</div>
                                <div className="Landing__contactus__form">
                                    <div>

                                        <Formik
                                            initialValues={{
                                                name: '',
                                                email: '',
                                                company: '',
                                                country: '',
                                                phone: '',
                                                message: '',
                                            }}
                                            validationSchema={SignupSchema}
                                            onSubmit={async values => {
                                                // same shape as initial values
                                                console.log(values);

                                                const data = {
                                                    name: values.name,
                                                    email: values.email,
                                                    company: values.company,
                                                    country: values.country,
                                                    phone: values.phone,
                                                    message: values.message,
                                                }
                                                let result = await sendContactData(data)
                                                console.log(result)
                                                if (result.status === 200) {
                                                    values.name = ""
                                                    values.email = ""
                                                    values.company = ""
                                                    values.country = null
                                                    values.phone = ""
                                                    values.message = ""
                                                    alert("data send successfully")
                                                } else {
                                                    alert("Something went wrong")

                                                }
                                            }}
                                        >
                                            {({ errors, touched, handleChange, handleBlur }) => (
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
                                                        <Field className="Landing__contactus__form__field__single" placeholder="Company*" name="company" />
                                                        {errors.company && touched.company ? (
                                                            <div style={{ color: "red" }}>{errors.company}</div>
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
                                                            <Field className="Landing__contactus__form__field" placeholder="Phone" name="phone" type="number" />
                                                            {errors.phone && touched.phone ? (
                                                                <div>{errors.phone}</div>
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
                            <div className="Contact__block__right">
                                <div className="Contact__block__right__address">
                                    <div className="Contact__block__right__title">Business Address</div>
                                    <address>
                                        3626 North Hall Street (Two Oak Lawn),
                                        Suite 610, Dallas, TX 75219
                                        USA
                                </address>
                                    <div className="Contact__block__right__number">
                                        <a href="mailto:abcgmail.com" className="Contact__block__right__mail">sales@marketsresearch.biz</a>
                                        <a href="tel:+91999999999" className="Contact__block__right__call">+91 123456789</a>
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
