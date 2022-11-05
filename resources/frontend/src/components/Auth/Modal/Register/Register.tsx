import React, { MouseEventHandler, useState } from 'react';

import * as Yup from 'yup';

import { Formik, } from 'formik';

import { useSignIn } from 'react-auth-kit';

import { useMutation } from '@apollo/client';

import { REGISTER } from "@/frontend/src/graphql/mutations";
import { RegisterInput, RegisterResponse } from "@/frontend/src/graphql/types";

import { Button, Form, Modal, Row } from 'react-bootstrap';

import classes from './../Modal.module.css';


interface RegisterFormValues {
    email: string;
    name: string;
    password: string;
    confirmPassword: string;
}

interface ModalAuthProps {
    onClick: MouseEventHandler<HTMLButtonElement>
}

const yupSchema = Yup.object().shape({
    email: Yup.string()
        .email('Неверный формат email')
        .required('Обязательное поле'),
    name: Yup.string()
        .min(2, 'Минимум 2 символа')
        .max(20, 'Максимум 20 символов')
        .required('Обязательное поле'),
    password: Yup.string()
        .min(6, 'Минимум 6 символов')
        .max(20, 'Максимум 20 символов')
        .required('Обязательное поле'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Пароли не совпадают')
        .required('Обязательное поле'),
});

const Register = (props: ModalAuthProps) => {


    const [registered, setRegistered] = useState<boolean>(false);

    const initialValues: RegisterFormValues = {
        email: '',
        name: '',
        password: '',
        confirmPassword: '',
    };

    const [register, {data, error, loading}] = useMutation<RegisterResponse, RegisterInput>(REGISTER);

    const onSubmit: any = (data: RegisterFormValues, actions: any) => {
        console.log(data);
        actions.setSubmitting(false);
        register({
            variables: {
                email: data.email,
                name: data.name,
                password: data.password
            }
        }).then(function (res: RegisterResponse) {
            console.log(res);
            if (res.data.register.message == "User successfully registered") {
                setRegistered(true);
                setTimeout(() => {
                    props.onClick()
                }, 1000)
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
                        <Form className={registered ? classes.invisible : null} noValidate onSubmit={handleSubmit}>
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
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="name"
                                    placeholder="Username"
                                    value={values.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isValid={touched.name && !errors.name}
                                    isInvalid={!!errors.name}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.name}
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

                            <Form.Group
                                as={Row}
                            >
                                <Form.Label>Confirm password</Form.Label>
                                <Form.Control
                                    type="password"
                                    name="confirmPassword"
                                    placeholder="Confirm password"
                                    value={values.confirmPassword}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    isValid={touched.confirmPassword && !errors.confirmPassword}
                                    isInvalid={!!errors.confirmPassword}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.confirmPassword}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Form>
                    )}

                </Formik>
                <div className={registered ? null : classes.invisible}>
                    Successfully registered!
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.onClick}>
                    Close
                </Button>
                <Button variant="primary" onClick={onSubmit}>
                    Register!
                </Button>
            </Modal.Footer>
        </>
    )
}

export default Register;
