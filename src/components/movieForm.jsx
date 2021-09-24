import React from "react";

class MovieForm extends React.Component {
  handleSave = () => {
    console.log("Saved");
    this.props.history.push("/movies");
  };

  render() {
    return (
      <div>
        <h2>Movie Form {this.props.match.params.id}</h2>
        <button onClick={this.handleSave} className="btn btn-primary btn-sm">
          Save
        </button>
      </div>
    );
  }
}

export default MovieForm;
