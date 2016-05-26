import React from 'react';
import template from './App.rt';


export default class App extends React.Component {
  render() {
    return template.call(this);
  }
}
