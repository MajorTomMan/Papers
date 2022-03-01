import React, { useState } from 'react';

export default function Chat(params) {
    const [Message,setMessage]=useState(params)

    return (
        <div className='Message'>
            <p>
                params
            </p>
        </div>
    );
}