import React, { useState } from 'react'
import './Modal.css'
const Modal = ({ image, name, handleClose, checked, handleCheck, handleChangeName, handleSave }) => {
    const types = ['Grass', 'Poison', 'Flying', 'Fire', 'Water', 'Bug'];

    return (
        <div className="modal">
            <div className="modalContent">
                <button
                    onClick={() => {
                        handleClose();
                    }}

                >Close</button>
                <img src={image} alt={name} />
                <p className='modalName'>Name: <input type="text" value={name} onChange={(e) => handleChangeName(e.target.value)} /></p>
                <p className='classList'>Class:
                    <div className='modalClass'>
                        {types.map((type) => (
                            <div className="class" key={type}>
                                <input
                                    id={`checkbox-${type}`}
                                    type='checkbox'
                                    checked={checked.includes(type)}
                                    onChange={() => {
                                        handleCheck(type);
                                    }}
                                />
                                <label htmlFor={`checkbox-${type}`}>{type}</label>
                            </div>
                        ))}
                    </div>
                </p>
                <button onClick={() => handleSave()}>Save</button>

            </div>
        </div>
    )
}

export default Modal