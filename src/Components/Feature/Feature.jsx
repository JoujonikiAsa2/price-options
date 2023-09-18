import React from 'react';
import PropTypes from  'prop-types';
import {AiOutlineCheck} from 'react-icons/ai'
const Feature = ({feature}) => {
    return (
        <div>
            <p className='flex gap-2 items-center pl-16 '><AiOutlineCheck className='font-bold text-green-200'></AiOutlineCheck>{feature}</p>
        </div>
    );
};

Feature.propTypes = {
    feature: PropTypes.string
}

export default Feature;