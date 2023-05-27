
import { Formik, Form, Field, ErrorMessage } from "formik";
import classes from "./CreateForm.module.css";


const CreateForm = () => {
    return (
        <div className={classes.__form}>
            <Formik
            initialValues={{ email: '', password: '' }}
            validate={values => {
                const errors = {};
                if (!values.email) {
                errors.email = 'Required';
                } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                errors.email = 'Invalid email address';
                }
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
                }, 400);
            }}
            >
            {({ isSubmitting }) => (
                <Form>
                <label> Name</label>
                <Field type="name" name="name" />
                <ErrorMessage name="email" component="div" />
                <label> Email</label>
                <Field type="email" name="email" />
                <ErrorMessage name="email" component="div" />
                <label>Age</label>
                <Field type="password" name="password" />
                <ErrorMessage name="password" component="div" />
                <label> Gender </label>
                <div className={classes.radio__button} role="group" aria-labelledby="my-radio-group">
                    
                    <span>
                        <Field type="radio" name="picked" value="Male" />
                        <label>
                            Male
                        </label>
                    </span>
                    <span>
                        <Field type="radio" name="picked" value="Female" />
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