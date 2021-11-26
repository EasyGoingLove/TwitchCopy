import React from "react";
import { Field, reduxForm } from "redux-form";
import {connect} from 'react-redux';
import {createStream} from '../../actions';

type JsxFnc = (props?: any) => JSX.Element;
type SubmitFnc = (formValues: { title: string; description: string }) => any;
type ErrorFnc = (properties: { error: string; touched: boolean }) => void;

const StreamCreate: JsxFnc = (props) => {

  const renderError: ErrorFnc = ({ error, touched }) => {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  };

  const rederInput: JsxFnc = ({ input, label, meta }) => {
    const classField = `ui field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={classField}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {renderError(meta)}
      </div>
    );
  };

  const onSubmit: SubmitFnc = (formValues) => {
    props.createStream(formValues);
  };

  return (
    <div className="streamCr-div">
      <form onSubmit={props.handleSubmit(onSubmit)} className="ui form error">
        <Field name="title" component={rederInput} label="Enter Title" />
        <Field
          name="description"
          component={rederInput}
          label="Enter Description"
        />
        <button className="ui button primary">Submit</button>
      </form>
    </div>
  );
};

const validate: SubmitFnc = (formValues) => {
  const errors: { title?: string; description?: string } = {};

  if (!formValues.title) {
    errors.title = "You must enter title";
  }

  if (!formValues.description) {
    errors.description = "You must enter description";
  }
  return errors;
};

const formWrapped = reduxForm({
  form: "streamCreate",
  validate: validate,
})(StreamCreate);

export default connect(null,{createStream})(formWrapped);