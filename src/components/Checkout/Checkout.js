import React, { Component } from 'react'
import { Formik, Form, Field } from 'formik';
import * as Yup from "yup";
// import paypal from 'paypal-checkout'
// import client from 'braintree-web/client'
// import paypalCheckout from 'braintree-web/paypal-checkout'


import './Checkout.css'
import CountryData from '../Report/Component/Country.json'
import {
    WireTransfer,
    Paypal_payment
} from '../../images/landing'
import { makePayment } from '../../Service/makePayment'
import { postPaymentDetails } from '../../Service/postPaymentDetails'
import { doPayment } from '../../Service/doPayment'
const SignupSchema = Yup.object().shape({
    fname: Yup.string()
        .min(2, 'Too Short!')
        .max(70, 'Too Long!')
        .required('Required'),
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
});




export default class Checkout extends Component {

    // state = {
    //     currentValue: '',
    //     address: "",
    //     city: "",
    //     company: "",
    //     country: "",
    //     email: "",
    //     fname: "",
    //     lname: "",
    //     otherNotes: "",
    //     phone: "",
    //     zip: "",
    //     token: "",
    //     paymentStatus: ""

    // }

    // componentDidMount = async () => {

    //     let result = await makePayment()
    //     console.log(result)
    //     this.setState({ token: result.data })
    //     // localStorage.setItem("paymentStatus", "")

    // }
    // onChangeRadio = (e) => {
    //     this.renderPayPalBtn()
    //     this.setState({ currentValue: e.currentTarget.value })

    // }


    // onSubmitBtn = async (val) => {
    //     if (this.state.currentValue != "") {
    //         if (this.state.currentValue === "paypal") {

    //             try {
    //                 const data = {
    //                     address: val.address,
    //                     city: val.city,
    //                     company: val.company,
    //                     country: val.country,
    //                     email: val.email,
    //                     fname: val.fname,
    //                     lname: val.lname,
    //                     otherNotes: val.otherNotes,
    //                     phone: val.phone,
    //                     zip: val.zip,
    //                 }
    //                 const payValue = await localStorage.getItem("reportValue")
    //                 let result = await postPaymentDetails(data);
    //                 console.log(result)


    //             } catch (error) {
    //                 console.log(error)
    //             }

    //         }
    //         else {
    //             alert("Bank transfer is not starting yet. Please go with PayPal")
    //         }
    //     }
    //     else {
    //         alert("please select payment option")
    //     }
    // }

    // renderPayPalBtn = async () => {
    //     let paymentStatus = ""
    //     const { address,
    //         city,
    //         company,
    //         country,
    //         email,
    //         fname,
    //         lname,
    //         otherNotes,
    //         phone,
    //         zip,
    //         amount,
    //         token } = this.state;
    //     paypal.Button.render({
    //         braintree: {
    //             client: client,
    //             paypalCheckout: paypalCheckout
    //         },
    //         client: {
    //             // production: 'CLIENT_TOKEN_FROM_SERVER',
    //             sandbox: `${token}`
    //         },
    //         env: 'sandbox', // Or 'sandbox'
    //         commit: true, // This will add the transaction amount to the PayPal button

    //         payment: function (data, actions) {

    //             return actions.braintree.create({
    //                 flow: 'checkout', // Required
    //                 amount: localStorage.getItem("reportValue"), // Required
    //                 currency: 'USD', // Required
    //                 enableShippingAddress: true,
    //                 shippingAddressEditable: false,
    //                 shippingAddressOverride: {
    //                     recipientName: `${fname} ${lname}`,
    //                     line1: '1234 Main St.',
    //                     // line2: 'Unit 1',
    //                     city: 'Chicago',
    //                     countryCode: 'US',
    //                     postalCode: '60652',
    //                     state: 'IL',
    //                     phone: '123.456.7890'
    //                 }
    //             });


    //         },

    //         onAuthorize: async function (payload) {

    //             const data = {
    //                 amt: localStorage.getItem("reportValue"),
    //                 nonce: payload.nonce
    //             }

    //             let result = await doPayment(data)
    //             paymentStatus = await result.data
    //             localStorage.setItem("paymentStatus", paymentStatus)


    //         },
    //     }, '#checkoutBtnPay'

    //     );
    // }

    render() {


        return (
            <div className="Checkout__wrapper">
                <div className="Checkout__container">
                    {/* <div className="Checkout__block">
                        <div className="Checkout__left">
                            <div className="Checkout__table__wrapper">
                                <table style={{ width: "100%" }}>
                                    <tr>
                                        <th>Product Name</th>
                                        <th>Total</th>

                                    </tr>
                                    <tr>
                                        <td className="color_blue">{localStorage.getItem("reportTitle")}</td>
                                        <td>${localStorage.getItem("reportValue")}</td>

                                    </tr>
                                    <tr>
                                        <td>Subtotal</td>
                                        <td>${localStorage.getItem("reportValue")}</td>

                                    </tr>
                                    <tr>
                                        <td>Total</td>
                                        <td>${localStorage.getItem("reportValue")}</td>

                                    </tr>
                                </table>
                            </div>

                            <div className="Checkout__form__wrapper">
                                <div className="Checkout__form__title">Billing Details</div>
                                <Formik
                                    innerRef={this.checkoutBtn}
                                    initialValues={{

                                        address: "",
                                        city: "",
                                        company: "",
                                        country: "",
                                        email: "",
                                        fname: "",
                                        lname: "",
                                        otherNotes: "",
                                        phone: "",
                                        zip: "",

                                    }}
                                    validationSchema={SignupSchema}
                                    onSubmit={values => {
                                        localStorage.getItem("paymentStatus") === "done" ?
                                            this.onSubmitBtn(values)
                                            : alert("please go throgh the paymant first!!!!!!")
                                    }}
                                >
                                    {({ errors, touched, handleChange, handleBlur, setFieldValue }) =>
                                        (
                                            < Form >
                                                <div >
                                                    <div className="Checkout__form__two__field">
                                                        <div className="Checkout__form__field__wrapper">
                                                            <div>
                                                                <label className="Checkout__form__label">First Name <span className="Checkout__form__mandatory">*</span></label>
                                                            </div>
                                                            <Field className="Checkout__form__field" placeholder="First name" name="fname"
                                                                value={this.state.fname}

                                                                onChange={(e) => {
                                                                    this.setState({ fname: e.target.value }, () => {
                                                                        setFieldValue("fname", this.state.fname)
                                                                    })
                                                                }}
                                                            />
                                                            {errors.fname && touched.fname ? (
                                                                <div style={{ color: "red" }}>{errors.fname}</div>
                                                            ) : null}
                                                        </div>
                                                        <div className="Checkout__form__field__wrapper">
                                                            <div>
                                                                <label className="Checkout__form__label">Last Name <span className="Checkout__form__mandatory">*</span></label>
                                                            </div>
                                                            <Field className="Checkout__form__field" placeholder="Last name" name="lname"
                                                                value={this.state.lname}
                                                                onChange={(e) => {
                                                                    this.setState({ lname: e.target.value }, () => {
                                                                        setFieldValue("lname", this.state.lname)
                                                                    })
                                                                }}
                                                            />
                                                            {errors.lname && touched.lname ? (
                                                                <div style={{ color: "red" }}>{errors.lname}</div>
                                                            ) : null}
                                                        </div>
                                                    </div>
                                                    <div className="Checkout__form__field__wrapper">
                                                        <div>
                                                            <label className="Checkout__form__label">Company Name </label>
                                                        </div>
                                                        <Field className="Checkout__form__field" placeholder="Company name" name="company"
                                                            value={this.state.company}
                                                            onChange={(e) => {
                                                                this.setState({ company: e.target.value }, () => {
                                                                    setFieldValue("company", this.state.company)
                                                                })
                                                            }}
                                                        />

                                                    </div>
                                                    <div className="Checkout__form__field__wrapper">
                                                        <div>
                                                            <label className="Checkout__form__label">Country Name</label>
                                                        </div>
                                                        <select className="Report__iquery__field__select"
                                                            value={this.state.country}
                                                            onChange={

                                                                (e) => {

                                                                    this.setState({ country: e.target.value }, () => {
                                                                        setFieldValue("country", this.state.country)
                                                                    })
                                                                }
                                                            }
                                                            onBlur={handleBlur} name="country">
                                                            <option hidden>Select Country</option>
                                                            {CountryData.map((obj) => (
                                                                <option >{obj.name}</option>
                                                            ))}
                                                        </select>
                                                    </div>
                                                    <div className="Checkout__form__field__wrapper">
                                                        <div>
                                                            <label className="Checkout__form__label">Street Address <span className="Checkout__form__mandatory">*</span> </label>
                                                        </div>
                                                        <Field className=" Checkout__form__field__textarea Checkout__form__field " component="textarea" name="address"

                                                            value={this.state.address}

                                                            onChange={(e) => {
                                                                this.setState({ address: e.target.value }, () => {
                                                                    setFieldValue("address", this.state.address)
                                                                })
                                                            }}
                                                        />
                                                        {errors.address && touched.address ? (
                                                            <div style={{ color: "red" }}>{errors.address}</div>
                                                        ) : null}
                                                    </div>
                                                    <div className="Checkout__form__field__wrapper">
                                                        <div>
                                                            <label className="Checkout__form__label">Zip <span className="Checkout__form__mandatory">*</span></label>
                                                        </div>
                                                        <Field className="Checkout__form__field" placeholder="Zip code" name="zip"
                                                            value={this.state.zip}
                                                            onChange={(e) => {
                                                                this.setState({ zip: e.target.value }, () => {
                                                                    setFieldValue("zip", this.state.zip)
                                                                })
                                                            }}
                                                        />
                                                        {errors.zip && touched.zip ? (
                                                            <div style={{ color: "red" }}>{errors.zip}</div>
                                                        ) : null}
                                                    </div>
                                                    <div className="Checkout__form__field__wrapper">
                                                        <div>
                                                            <label className="Checkout__form__label">Town/City <span className="Checkout__form__mandatory">*</span></label>
                                                        </div>
                                                        <Field className="Checkout__form__field" placeholder="Town/City" name="city"
                                                            value={this.state.city}
                                                            onChange={(e) => {
                                                                this.setState({ city: e.target.value }, () => {
                                                                    setFieldValue("city", this.state.city)
                                                                })
                                                            }}
                                                        />
                                                        {errors.city && touched.city ? (
                                                            <div style={{ color: "red" }}>{errors.city}</div>
                                                        ) : null}
                                                    </div>

                                                    <div className="Checkout__form__two__field">
                                                        <div className="Checkout__form__field__wrapper">
                                                            <div>
                                                                <label className="Checkout__form__label">Phone No <span className="Checkout__form__mandatory">*</span></label>
                                                            </div>
                                                            <Field className="Checkout__form__field" placeholder="Phone No" name="phone"
                                                                value={this.state.phone}
                                                                onChange={(e) => {
                                                                    this.setState({ phone: e.target.value }, () => {
                                                                        setFieldValue("phone", this.state.phone)
                                                                    })
                                                                }}
                                                            />
                                                            {errors.phone && touched.phone ? (
                                                                <div style={{ color: "red" }}>{errors.phone}</div>
                                                            ) : null}
                                                        </div>
                                                        <div className="Checkout__form__field__wrapper">
                                                            <div>
                                                                <label className="Checkout__form__label">Email Address <span className="Checkout__form__mandatory">*</span></label>
                                                            </div>
                                                            <Field className="Checkout__form__field" placeholder="Email Address" name="email"
                                                                value={this.state.email}
                                                                onChange={(e) => {
                                                                    this.setState({ email: e.target.value }, () => {
                                                                        setFieldValue("email", this.state.email)
                                                                    })
                                                                }}
                                                            />
                                                            {errors.email && touched.email ? (
                                                                <div style={{ color: "red" }}>{errors.email}</div>
                                                            ) : null}
                                                        </div>

                                                    </div>
                                                    <div className="Checkout__form__field__wrapper">
                                                        <div className="Checkout__form__title">Additinal Information</div>
                                                        <div>
                                                            <label className="Checkout__form__label">Order Notes </label>
                                                        </div>
                                                        <Field className=" Checkout__form__field__textarea Checkout__form__field " component="textarea" name="otherNotes"
                                                            value={this.state.otherNotes}
                                                            onChange={(e) => {
                                                                this.setState({ otherNotes: e.target.value }, () => {
                                                                    setFieldValue("otherNotes", this.state.otherNotes)
                                                                })
                                                            }}
                                                        />
                                                        {errors.otherNotes && touched.otherNotes ? (
                                                            <div style={{ color: "red" }}>{errors.otherNotes}</div>
                                                        ) : null}
                                                    </div>

                                                    <div className="Checkout__form__two__field">
                                                        <div className="Checkout__form__field__wrapper">
                                                            <div>
                                                                <input type="radio" name="payment" value="Direct Bank Transfer" onChange={this.onChangeRadio} />Direct Bank Transfer
                                                                </div>
                                                            <img src={WireTransfer} className="Checkout__form__radio__image" alt="bank image" />
                                                            <div>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order won't be shipped until the funds have cleared in our account.</div>
                                                        </div>
                                                        <div className="Checkout__form__field__wrapper">
                                                            <div>
                                                                <input type="radio" id="paypalID" name="payment" value="paypal" onChange={this.onChangeRadio} />PayPal OR Credit Card
                                                                </div>
                                                            <div className="">
                                                                <img src={Paypal_payment} className="Checkout__form__radio__image" alt="bank image" />
                                                                <div >Pay via PayPal; you can pay with your credit card if you don’t have a PayPal account.</div>
                                                            </div>
                                                            <div>
                                                                <button id="checkoutBtnPay" >Pay</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="Checkout__form__field__btn__wrapper">
                                                    <button type="submit" className="Checkout__form__field__btn">Place Order</button>
                                                </div>

                                            </Form>
                                        )

                                    }
                                </Formik>
                            </div>
                        </div>
                        <div className="About__right">
                            <div className="About__right__block">
                                <div className="About__right__block__title">Latest Report</div>
                                <div className="About__right__report">Global Organic Carbon Analyzers Market Insights and Forecast to 2026</div>
                                <div className="About__right__report">Global Tube Mill Market Insights and Forecast to 2026</div>
                                <div className="About__right__report">Global Aluminium Titanic Boron Alloy Market Insights and Forecast to 2026</div>
                                <div className="About__right__report">Global License Plate Recognition Camera Market Insights and Forecast to 2026</div>
                            </div>
                            <div className="About__right__block">
                                <div className="About__right__block__title">Latest News</div>
                                <div className="About__right__report">Global Organic Carbon Analyzers Market Insights and Forecast to 2026</div>
                                <div className="About__right__report">Global Tube Mill Market Insights and Forecast to 2026</div>
                                <div className="About__right__report">Global Aluminium Titanic Boron Alloy Market Insights and Forecast to 2026</div>
                                <div className="About__right__report">Global License Plate Recognition Camera Market Insights and Forecast to 2026</div>
                            </div>
                        </div>
                    </div> */}

                    <div><b>This page is under constrution we will start soon</b></div>
                </div>
            </div >
        )
    }
}
