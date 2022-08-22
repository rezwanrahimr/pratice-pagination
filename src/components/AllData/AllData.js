import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import AllDataCss from './AllDataCss.css';

const AllData = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setData(data));
    }, [])
    console.log(data)
    return (
        <div className=''>
            <h1>Hello EveryOne : {data.length}</h1>
            <div className=' d-flex flex-row flex-wrap justify-content-center'>
            {
                data.slice(0,50).map(item => <div>
                    <Card className='m-3' style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>{item.id}</Card.Title>
                            <Card.Text>
                               {item.title}
                            </Card.Text>
                           
                        </Card.Body>
                    </Card>

                </div>)
            }
            </div>

        </div>
    );
};

export default AllData;