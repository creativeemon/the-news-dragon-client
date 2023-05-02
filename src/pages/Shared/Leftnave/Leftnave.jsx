import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Leftnave = () => {
    const [categories , setCategories] = useState([])

useEffect(() => {
    fetch('http://localhost:3000/categories')
    .then(res => res.json())
    .then(data => setCategories(data))
}, [])

    return (
        <div>
            <h4>All Category</h4>
            <div className='ps-4'>
            {
                categories.map(categorie => <p
                key={categorie.id}
                >
                    <Link to={`/categories/${categorie.id}`} className='text-decoration-none'>{categorie.name}</Link>
                </p>)
            }
            </div>
        </div>
    );
};

export default Leftnave;