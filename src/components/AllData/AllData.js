import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import AllDataCss from './AllDataCss.css';

const AllData = () => {
    const [data, setData] = useState([]);
    const [dataCount,setDataCount] = useState(0);
    const [selectPage,setSelectPage] = useState(0);
    const [size,setSize] = useState(10);

    useEffect(()=>{
        fetch('http://localhost:5000/postCount')
        .then(res => res.json())
        .then(data => {
            const count = data.result;
            const result = Math.ceil(count/10)
            setDataCount(result);
        })
    })

    useEffect(() => {
        fetch(`http://localhost:5000/postcountt?page=${selectPage}&size=${size}`)
            .then(res => res.json())
            .then(data => setData(data));
    }, [selectPage,size])
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
            <div>
               {
                   [...Array(dataCount).keys()].map(number => <><button onClick={()=>setSelectPage(number)}
                  className={selectPage == number ? 'select':''}
                   >{number+1}</button></>)
                   
               }
               {
                   size
               }
               <select onClick={(e)=> setSize(e.target.value)}>
                   <option value="5">5</option>
                   <option value="10">10</option>
                   <option value="10">20</option>
               </select>
            </div>

        </div>
    );
};

export default AllData;