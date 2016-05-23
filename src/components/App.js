import React from 'react';
 //import {Link, browserHistory} from 'react-router';
import template from './App.rt';



// export default function App({children}){
//   return (
//     <div>
//       <header>
//         Links:
//         {' '}
//         <Link to='/'>Home</Link>
//         {' '}
//         <Link to='/issues'>Issues</Link>
//         {' '}
//       </header>
//       <div>
//         <button onClick={() => browserHistory.push('/issuePage')}>Go to /issuePage</button>
//       </div>
//       <div style={{ marginTop: '1.5em' }}>{children}</div>
//     </div>
//   )
// }

export default class App extends React.Component {
  render() {
    return template.apply(this);
  }
}
