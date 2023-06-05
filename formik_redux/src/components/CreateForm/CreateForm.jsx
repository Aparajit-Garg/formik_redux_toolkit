
import { Formik, Form, Field, ErrorMessage } from "formik";
import classes from "./CreateForm.module.css";
import { useDispatch } from "react-redux";
import { createUser } from "../../features/userDetailSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const CreateForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        document.getElementById("searchText").disabled = true
    }, []);
    return (
        <div className={classes.__form}>
            <Formik
            initialValues={{ name: '', email: '', age: '', field: '', gender: ''}}
            validate={values => {
                const errors = {};
                if (!values.name)
                    errors.name = 'Required';
                if(!values.age)
                    errors.age = 'Required';
                if(!values.gender)
                    errors.gender = 'Required';
                if(!values.field)
                    errors.field = 'Required';
                if (!values.email) {
                    errors.email = 'Required';
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = 'Invalid email address';
                }

                return errors;
            }}
            onSubmit={(values, { setSubmitting, resetForm }) => {
                console.log(values);
                setSubmitting(false);
                dispatch(createUser(values));
                resetForm();
                navigate('/showDirectory');
                // setTimeout(() => {
                // alert(JSON.stringify(values, null, 2));
                // setSubmitting(false);
                // }, 400);
            }}
            >
            {({ isSubmitting }) => (
                <Form>
                <label> Name</label>
                <Field type="name" name="name" />
                <ErrorMessage name="name" component="div" />
                <label> Email</label>
                <Field type="email" name="email" />
                <ErrorMessage name="email" component="div" />
                <label>Age</label>
                <Field type="number" name="age" />
                <ErrorMessage name="age" component="div" />
                <label>Field</label>
                <Field type="name" name="field" />
                <ErrorMessage name="field" component="div" />
                <label> Gender </label>
                <div className={classes.radio__button} role="group" aria-labelledby="my-radio-group">
                    <span>
                        <Field type="radio" name="gender" value="Male" />
                        <label>
                            Male
                        </label>
                    </span>
                    <span>
                        <Field type="radio" name="gender" value="Female" />
                        <label>
                            Female
                        </label>
                    </span>
                </div>


                <button type="submit" disabled={isSubmitting}>
                    Submit
                </button>
                </Form>
            )}
            </Formik>
        </div>
    )
}

export default CreateForm;