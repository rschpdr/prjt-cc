import React, { Component } from 'react';
import jsonp from 'jsonp';

const API_KEY = 'dsLxU0oVIJdF25SQBZEwwEAL7N8aTLE3';
const USERNAME = 'carolcarretto';
const URL = `https://api.behance.net/v2/projects`;

class Project extends Component {
  state = { project: [] };

  async componentDidMount() {
    const { id } = this.props.match.params;

    const response = await jsonp(
      `${URL}/${id}?client_id=${API_KEY}`,
      null,
      (err, data) => {
        if (err) {
          console.log(err);
        } else {
          this.setState({ project: data.project });
        }
      }
    );
  }

  renderModules() {
    if (this.state.project.modules !== undefined) {
      return this.state.project.modules.map(module => {
        if (module.text) {
          return (
            <p key={module.id} className="content__paragraph">
              {module.text_plain}
            </p>
          );
        }
        return <img src={module.src} key={module.id} />;
      });
    }
  }

  render() {
    if (!this.state.project) {
      return <div>Loading...</div>;
    }

    return (
      <div className="content">
        <div className="row">
          <div className="content__description">
            <h1 className="content__title">{this.state.project.name}</h1>
            {this.renderModules()}
          </div>
        </div>
      </div>
    );
  }
}

export default Project;
