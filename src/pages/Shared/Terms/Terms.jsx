import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h2>Terms and condition </h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum corrupti rerum molestias, alias et quisquam nihil quibusdam dignissimos consequatur. Temporibus fugiat modi voluptatem, ab consequatur unde adipisci necessitatibus iusto enim.
            </p>
            <p>Go back to <Link to="/register">Register</Link></p>
        </div>
    );
};

export default Terms;