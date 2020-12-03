class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this)
        this.state = {
            options: []
        }
    }

    handleDeleteOption() {
        this.setState(() => {
            return {
                options: []
            }
        })
    }

    handlePick() {
        const randNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randNum];
        alert(option);
    }

    handleAddOption(option) {
        if(!option) {
            return "Please enter a valid value";
        } else if(this.state.options.indexOf(option) > -1) {
            return "Option already exists";
        }

        this.setState((prevState) => {
            return {
                options: prevState.options.concat(option)
            }
        })
    }

    render() {
        const title = "Indecision App"
        const subtitle = "Let computer decide"
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
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption 
                    handleAddOption={this.handleAddOption} 
                />
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <p>{this.props.subtitle}</p>
            </div>
        );
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button disabled={!this.props.hasOptions} onClick={this.props.handlePick}>Make a Decision</button>
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        const name = this.props.name;
        return (<li>{name}</li>);
    }
}

class Options extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const options = this.props.options;
        const optionsEl = options.map((option) => <Option key={option} name={option}/>)
        return (
            <div>
                <button onClick={this.props.handleDeleteOption}>Remove All</button>
                <ol>
                    {optionsEl}
                </ol>
            </div>
        );
    }
}

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this)
        this.state = {
            error: undefined
        }
    }

    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        this.setState(() => {
            return {
                error: error
            };
        });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" />
                    <button>Add Option</button>
                </form>
                {this.state.error ? <p>{this.state.error}</p> : ''}
            </div>
        );
    }
}

const appRoot = document.getElementById('app');

ReactDOM.render(<IndecisionApp />, appRoot)