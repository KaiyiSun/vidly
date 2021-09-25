import React from "react";
import Form from "./common/form";
import Joi from "joi-browser";

class MovieNew extends Form {
  state = {
    data: {
      title: "",
      genre: "",
      numberInStock: "",
      rate: "",
    },
    errors: {},
  };

  schema = {
    title: Joi.string().required().label("Title"),
    genre: Joi.string().required().label("Genre"),
    numberInStock: Joi.number()
      .integer()
      .min(0)
      .max(100)
      .required()
      .label("Number in Stock"),
    rate: Joi.number().integer().min(0).max(10).required().label("Rate"),
  };

  doSubmit = () => {
    //Call the server
    this.props.history.replace("/movies");
    console.log("submitted");
  };

  render() {
    return (
      <div>
        <h1>Movie Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title")}
          {this.renderInput("genre", "Genre", "select")}
          {this.renderInput("numberInStock", "Number in Stock")}
          {this.renderInput("rate", "Rate")}
          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default MovieNew;
