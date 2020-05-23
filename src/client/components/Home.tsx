import React, { Component } from 'react';
import { any } from 'prop-types';


export default class Home extends Component<IAppProps, IAppState> {

  constructor(props: IAppProps) {
    super(props);

    this.state = {
      user: '',
      text: '',
      chirps: {} 
    }
  }


  componentDidMount() {
    fetch('/api/chirps');
  }

  render() {
    

    return (
      <main className="container timeline">
        <section className="row justify-content-center">
          <>
            {/* modifies and styles each new chirp
            {objToArray.map(chirp => {
              return (
                <div className="col-md-7">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">{this.state.user}</h5>
                      <p className="card-text">{this.state.text}</p>
                    </div>
                  </div>
                </div>
              )
            })} */}
          </>
        </section>
      </main>
    );
  }



}

export interface IAppProps { }

export interface IAppState {
  user: string,
  text: string,
  chirps: object
}