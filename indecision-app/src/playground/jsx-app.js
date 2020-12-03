console.log('App is running')

const appInfo = {
    title: 'Indecision App',
    subtitle: 'Making decision is hard',
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if(option) {
        appInfo.options.push(option);
        e.target.elements.option.value = '';
        renderApp();
    }
}

const onMakeDecision = () => {
    const randNum = Math.floor(Math.random() * appInfo.options.length);
    const option = appInfo.options[randNum];
    alert(option);
}

const onLoadOptions = () => {
    return appInfo.options.map((option, index) => <li key={index}>{option}</li>)
}

const onRemoveAll = () => {
    appInfo.options = [];
    renderApp();
}

// Use logical and operator to check subtitle
const renderApp = () => {
    let template = (
        <div>
            <h1>{appInfo.title}</h1>
            {(appInfo.subtitle) && <p>{appInfo.subtitle}</p>}
            <p>{appInfo.options.length > 0 ? "Here are your options" : "No options"}</p>
            <button disabled={appInfo.options.length === 0} onClick={onMakeDecision}>Make a Decision</button>
            <button onClick={onRemoveAll}>Remove All</button>
            <ol>
                {onLoadOptions()}
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        </div>);
        
    let appRoot = document.getElementById('app');
    ReactDOM.render(template, appRoot)
}

renderApp()