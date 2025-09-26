import React from 'react';
import bgImg1 from './../../assets/vector1.png';
import bgImg2 from './../../assets/vector2.png';

const CountCard = ({ count}) => {
    // console.log(data)

    // const openData = t.filter((element) => element.status === "Open");
    // const inProgressData = t.filter((element) => element.status === "In Progress");

    // console.log({openData,inProgressData})
    
    return (

       
            <div className='grid grid-cols-1 md:grid-cols-2 max-w-[1200px] mx-auto gap-5 p-3 md:p-0'>
                
            <div className=' overflow-hidden flex  items-center  justify-center rounded-md  text-white h-[200px] bg-gradient-to-r from-purple-700 to-purple-400 mt-8  mb-5'>
                 <img src={bgImg1} alt="" />   
                    <div className='text-center '>
                    <h2 className='font-semibold whitespace-nowrap'>In-Progress</h2>
                        <p className='text-3xl text bold'>{count.length}</p>
                    
                    </div>
                    <img src={bgImg2} alt="" />
            
            </div>
            
                <div className=' overflow-hidden flex  items-center justify-center  rounded-md  text-white h-[200px]  bg-gradient-to-r from-green-400 to-green-700 mt-8 mb-5'>
                    <img src={bgImg1} alt="" />
                    <div className='text-center'>
                    <h2 className='font-semibold'>Resolved</h2>
                        <p className='text-3xl text bold'>{ count.length}</p>
                    </div>
                    <img src={bgImg2} alt="" />
                </div>
                


                
            </div>
     
    );
};

export default CountCard;