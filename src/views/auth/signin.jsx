import React from 'react';
import {
  Card,
  CardBody,
  Row,
  Col,
  CardSubtitle,
  Button,
  CardHeader,
  FormGroup,
  Label,
} from 'reactstrap';

import { Formik, Form, Field, ErrorMessage } from 'formik';

import withRedux from '../../redux';

const Signin = (props) => {
  const handleLogin = (values, { setSubmitting }) => {
    console.log('values', values);
    try {
      props.login(values);
    } catch (err) {
      console.log('Err', err);
    }
    setSubmitting(false);
  };

  const handleValidations = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = '* Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = '* Invalid email address';
    }
    if (!values.password) {
      errors.password = '* Required';
    }
    return errors;
  };

  return (
    <Row className=' '>
      <Col sm='2' md='3' />
      <Col sm='8' md='6'>
        <Card>
          <CardHeader>Sign in to your account</CardHeader>
          <CardBody>
            <CardSubtitle></CardSubtitle>
            {/* <hr /> */}

            <Formik
              initialValues={{ email: '', password: '' }}
              validate={handleValidations}
              onSubmit={handleLogin}
            >
              {({ isSubmitting }) => (
                <Form>
                  <FormGroup>
                    <Label>Email</Label>
                    <Field
                      type='email'
                      className='form-control'
                      placeholder='someone@example.com'
                      name='email'
                    />
                    <ErrorMessage
                      name='email'
                      component='small'
                      className='text-danger'
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for='password'>Password</Label>
                    <Field
                      type='password'
                      className='form-control'
                      name='password'
                      placeholder='********'
                    />
                    <ErrorMessage
                      name='password'
                      component='small'
                      className='text-danger'
                    />
                  </FormGroup>
                  <Row>
                    <div className='col'>
                      <p>
                        <small>
                          <a href='/' className='text-secondary'>
                            Forgot password?
                          </a>
                          <br />
                        </small>
                        <a href='/'>Sign up for a new account</a>
                      </p>
                    </div>
                    <div className='col-auto'>
                      <Button
                        className='btn btn-success'
                        type='submit'
                        disabled={isSubmitting}
                      >
                        Sign in
                      </Button>
                    </div>
                  </Row>
                </Form>
              )}
            </Formik>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default withRedux(Signin);
