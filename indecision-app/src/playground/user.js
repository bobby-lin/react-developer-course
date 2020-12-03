
// Return location in JSX. If location is unknown, it will be undefined and not rendered
function getLocation(location) {
    if(location) {
        return <p>Location: {location}</p>;
    } 
}

const user = {
    name: 'Jet Lee',
    age: 110,
    location: 'HK'
}

// Use ternary operator
// Use logical and operator
// Location: use function to check
let template2 = (
    <div>
        <h1>{user.name ? user.name : 'Anonymous'}</h1>
        {(user.age && user.age > 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);