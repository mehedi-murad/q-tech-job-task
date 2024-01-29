import React from 'react';

const Button = ({content}) => {
    return (
        <div>
            <p className="bg-[#20AD96] px-4 py-2 rounded-lg w-64 text-white">{content}</p>
        </div>
    );
};

export default Button;