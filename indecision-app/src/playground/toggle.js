console.log('Hello')

class VisbilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        }
    }

    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        })
    }

    render() {
        const message = "Hello World!!!!!"
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>
                     {this.state.visibility ? "Hide Details" : "Show Details"}
                </button>
                <p>{this.state.visibility && message}</p>
            </div>
        );
    }
}

let appRoot = document.getElementById('app');
ReactDOM.render(<VisbilityToggle />, appRoot);

// console.log('Toggle App');

// let appRoot = document.getElementById('app');
// let buttonDetail = "Show details";

// const app = {
//     isVisible: false,
//     details: "This is the message"
// }

// const onShowDetail = () => {
//     app.isVisible = !app.isVisible;
//     if(!app.isVisible) {
//         buttonDetail = "Show details";
//     } else {
//         buttonDetail = "Hide details"
//     }
//     renderApp()
// }

// const renderApp = () => {
//     let template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={onShowDetail}>{buttonDetail}</button>
//             <p>{app.isVisible && app.details}</p>
//         </div>
//     );
//     ReactDOM.render(template, appRoot);
// }

// renderApp()