import '../App.css';

function Container(props) {
    return (
        <div className="container">
            <div className="row justify-content-center">
                {props.children}
            </div>
        </div>
    );
}

export default Container;
