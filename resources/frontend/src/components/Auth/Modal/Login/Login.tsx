import React, { MouseEventHandler, useState } from 'react';
import { useSignIn } from 'react-auth-kit';

import { Button, Form, Modal, Row } from 'react-bootstrap';

import { useMutation } from "@apollo/client";

import * as Yup from 'yup';

import classes from './../Modal.module.css';
import { LOGIN } from "@/frontend/src/graphql/mutations";
import { LoginInput, LoginResponse } from "@/frontend/src/graphql/types";
import { Formik } from 'formik';


interface LoginFormValues {
    email: string;
    password: string;
}

interface ModalAuthProps {
    onClick: MouseEventHandler<HTMLButtonElement>
}

const yupSchema = Yup.object().shape({
    email: Yup.string()
        .email('Неверный формат email')
        .required('Обязательное поле'),
    password: Yup.string()
        .min(6, 'Минимум 6 символов')
        .max(20, 'Максимум 20 символов')
        .required('Обязательное поле')
});

const initialValues = {
    email: '',
    password: '',
}

const Login = (props: ModalAuthProps) => {

    const signIn = useSignIn();

    const [loggedIn, setLoggedIn] = useState<boolean>(false);

    const [login, {data, loading}] = useMutation<LoginResponse, LoginInput>(LOGIN);

    const onSubmit: any = (data: LoginFormValues, actions: any) => {
        console.log(data);
        actions.setSubmitting(false);
        login({
            variables: {
                email: data.email,
                password: data.password
            }
        }).then(function (res: LoginResponse) {
            console.log(res);
            if (res.data.login.message == "Successfully signed in") {
                setLoggedIn(true);
                signIn({
                    token: res.data.login.token,
                    expiresIn: 1440,
                    tokenType: 'Bearer',
                    authState: res.data.login.user
                });
            }
        })
    }

    return (
        <>
            <Modal.Body>
                <Formik
                    initialValues={initialValues}
                    onSubmit={onSubmit}
                    validationSchema={yupSchema}
                >

                    {({
                          handleSubmit,
                          handleChange,
                          handleBlur,
                          values,
                          touched,
                          isValid,
                          errors,
                      }) => (
                        <Form className={loggedIn ? classes.invisible : null} noValidate onSubmit={handleSubmit}>
                            <Form.Group
                                as={Row}
                                md="4"
                            >
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    placeholder="your.email@site.com"
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isValid={touched.email && !errors.email}
                                    isInvalid={!!errors.email}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.email}
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group
                                as={Row}
                                md="4"
                            >
                                <Form.Label>Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    value={values.password}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isValid={touched.password && !errors.password}
                                    isInvalid={!!errors.password}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.password}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Form>
                    )}

                </Formik>
                <div className={loggedIn ? null : classes.invisible}>
                    Successfully logged in!
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.onClick}>
                    Close
                </Button>
                <Button variant={"primary"} onClick={onSubmit}>
                    Sign in!
                </Button>
            </Modal.Footer>
        </>
    )
}

export default Login;
