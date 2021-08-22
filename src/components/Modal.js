import '../App.css';

function Modal(props) {
    return (
        <div className="modal fade" id={props.id} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">{props.name} - <span className="text-muted">{props.year}</span></h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <p>{props.content}</p>

                        <p><a target="_blank" href={props.link}>{props.linkText}</a></p>
                    </div>
                    <div className="modal-footer">
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;
