import React, { Component } from 'react';
import { any, string } from 'prop-types';
import chirpsstore from '../../server/chirpsstore';
import { RouteComponentProps } from 'react-router';




export default class AddChirp extends Component<IAddProps, IAddState> {

  constructor(props: IAddProps) {
    super(props);

    this.state = {
      user: '',
      value: '',
    };
  }

  handleChange = (event: any) => {
    this.setState({ value: event.target.value });
  }

  // addChirp = (event) => {
  //   event.preventDefault();
  //   const newChirp = this.props.match.params..slice()
  //   newChirp.unshift(this.state.value);
  //   this.setState({ value: '', chirps: newChirp });
  // }

  componentDidMount() {
    const data = {user: 'seth', text: 'hello world'}
    fetch('/api/chirps', {
      method: 'POST',
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data => console.log(data))
  }

  render() {
    return (
      <section className="newChirp">
        <div className="container">
          <section className="row justify-content-center">
            <article className="col-md-7">
              <div className="card shadow-sm">
                <div className="card-body">
                  <form className="form-group">
                    <input id="username" type="text" className="form-control shadow-sm" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                    <textarea
                      className="shadow-sm form-control mb-3"
                      aria-label="With textarea"
                      placeholder="What say you?"
                      value={this.state.value}
                      onChange={this.handleChange}
                    />
                    <button
                      className="btn"
                    onClick={this.componentDidMount}  //adds new chirp when "Chirp" is clicked
                    >Chirp</button>
                  </form>
                </div>
              </div>
            </article>
          </section>
        </div>
      </section>
    );
  }



}

export interface IAddProps extends RouteComponentProps < {id: string} >{ }

export interface IAddState {
  user: string;
  value: string;
}

