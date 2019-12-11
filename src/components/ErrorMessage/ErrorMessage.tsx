import React from 'react';
import PropTypes from 'prop-types';

export interface ErrorMessageProps {
    message: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => (
        <div className="alert alert-danger" role="alert">
            {message}
        </div>
);

ErrorMessage.propTypes = {
    message: PropTypes.string.isRequired
};

export default ErrorMessage;
