class Counter extends React.Component {
    constructor(props) {
        super(props)
        // Method binding
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0,
            demo: "Should be unchanged"
        }
    }

    handleAddOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            };
        });
    }

    handleMinusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            };
        });
    }

    handleReset() {
        this.setState(() => {
            return {
                count: 0
            };   
        });
    }

    render() {
        return (
            <div>
                <h1>Count = {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        );
    }
}

ReactDOM.render(<Counter />, document.getElementById('app'))

// let count = 0;
// const addOne = () => {
//     count++;
//     renderCounterApp() // Need to re-render everytime there is changes in the data as JSX does not have data-binding
// }
// const minusOne = () => {
//     count--;
//     renderCounterApp()
// }

// const reset = () => {
//     count = 0;
//     renderCounterApp()
// }

// const renderCounterApp = () => {
//     let template3 = (
//         <div>
//             <h1>Count = {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={reset}>Reset</button>
//         </div>
//     );
    
//     let appRoot = document.getElementById('app');
//     ReactDOM.render(template3, appRoot)
// }

// renderCounterApp();