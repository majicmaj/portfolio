import React, { Component } from "react";

class SingleProject extends Component {
  render() {
    return (
      <div className="singleproject">
        <img src={this.props.img} />
        <div className="singleproject_details">
          <h1>{this.props.title}</h1>
          <p>{this.props.description}</p>
          <div className="singleproject_links">
            <p>
              <a href={this.props.url}>deployed</a>
            </p>
            <p>
              <a href={this.props.repo}>github</a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default SingleProject;
