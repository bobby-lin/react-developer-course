import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp'

const appRoot = document.getElementById("app");
ReactDOM.render(<IndecisionApp options={[]}/>, appRoot);

class NewSyntax {
    name = "john"
}

const newSyntext = new NewSyntax();
console.log(newSyntext)