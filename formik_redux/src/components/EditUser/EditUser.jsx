import { ErrorMessage, Field, Form, Formik } from 'formik';
import classes from "./EditUser.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { editUser } from '../../features/userDetailSlice';


const EditUser = () => {

    const {id} = useParams();
    const [userData, setUserData] = useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const data = useSelector(state => state.app.users.filter(user => {
        return user.id === id;
    }))

    useEffect(() => {
        setUserData(data[0]);
        console.log(userData);
    }, [])

    if (!data) {
        return <h1>Loading...</h1>
    }


    return (
        <div className={classes.__form}>
            <Formik
            enableReinitialize= {true}
            initialValues={{ name: userData ? userData.name : '', 
                            email: userData ? userData.email : '', 
                            age: userData ? userData.age : '', 
                            gender: userData ? userData.gender : ''}}
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
                resetForm();
                const valueToPass = {"id": userData.id, "name": values.name, "email": values.email, "field": values.field, "gender": values.gender, "age": values.age};
                setUserData((prev) => [prev.id, values.name, values.email, values.field, values.gender, values.age]);
                dispatch(editUser(valueToPass));
                navigate("/showPosts");
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

export default EditUser;