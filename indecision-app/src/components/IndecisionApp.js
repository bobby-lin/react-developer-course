import React from 'react';
import AddOption from './AddOption'
import Options from './Options'
import Action from './Action'
import Header from './Header'

export default class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options: props.options,
        };
    }

    componentDidMount() {
        try {
            const options = JSON.parse(localStorage.getItem("options"));
            // Check for edge case where local storage does not have the data
            if (options) {
                this.setState(() => ({ options: options }));
            }
        } catch (e) {
            console.log(e);
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem("options", json);
        }
    }

    handleDeleteOptions() {
        this.setState(() => ({ options: [] }));
    }

    handleDeleteOption(optionToDelete) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => {
                return option !== optionToDelete;
            }),
        }));
    }

    handlePick() {
        const randNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randNum];
        alert(option);
    }

    handleAddOption(option) {
        if (!option) {
            return "Please enter a valid value";
        } else if (this.state.options.indexOf(option) > -1) {
            return "Option already exists";
        }

        this.setState((prevState) => ({
            options: prevState.options.concat(option),
        }));
    }

    render() {
        const title = "Indecision App";
        const subtitle = "Let computer decide";
        const options = this.state.options;

        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options
                    options={options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption handleAddOption={this.handleAddOption} />
            </div>
        );
    }
}
