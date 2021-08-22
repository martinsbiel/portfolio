import '../App.css';

function Badge(props) {
    return (
        <div>
            <span className={`badge rounded-pill ${props.type}`}>{props.children}</span>
        </div>
    );
}

export default Badge;
