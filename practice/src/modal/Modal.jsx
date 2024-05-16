import React from 'react';
import './Modal.css';
const Modal = (props) => {
    return (
        <div className='modal'>
            <div className="content">
                <div className="header">
                    <button
                        onClick={() => {
                            props.handleClose();
                        }
                        }
                    >
                        Close
                    </button>
                </div>
                {props.children}
            </div>
        </div>
    )
}

export default Modal

