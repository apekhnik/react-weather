import React, { useRef, useEffect } from 'react'

export default ({ onChange, onKeyPress, value }) => {
    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus()
    }, []);

    return (
        <input
            onChange={onChange}
            className='box-input'
            onKeyPress={onKeyPress}
            value={value}
            ref={inputRef}
            type="text" />
    )
}