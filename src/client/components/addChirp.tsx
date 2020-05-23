// import React, { Component } from 'react';


// export default class addChirp extends Component<IAppProps, IAppState> {
//   public newChirp = this.state.chirps.slice()

//   constructor(props: IAppProps) {
//     super(props);

//     this.state = {
//       user: '',
//       value: '',
//       chirps: []
//     }
//   }



//   addChirp = (e) => {
//     event.preventDefault();
//     this.newChirp.unshift(this.state.value);
//     this.setState({ value: '', chirps: this.newChirp });
//   }

//   componentDidMount() {
//     fetch('/api/chirps');
    
//   }

//   render() {
//     return (
//       <h1>Home Page</h1>
//     );
//   }
// }

// export interface IAppProps { }

// export interface IAppState {
//   user: string = '',
//   value: string = '',
//   chirps: any[] = []
// }