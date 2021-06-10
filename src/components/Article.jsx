import React from 'react';
import image from '../img/toast.jpg'



const Article = () => {
    
    return (
        
        <div className="article">
        
            <div className='ligneArt'>
                <div>
                    <img src={image} alt="toast" />
                </div>
                <div className='text'>
                    <h2>Mon Premier article</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia enim neque, animi, quaerat incidunt accusantium officia expedita laborum, explicabo similique dicta libero repudiandae sequi natus tempore eligendi consequuntur minima. Ex.</p>
                </div>
            </div>
            <div className='ligneArt'>
            <div>
                    <img src={image} alt="toast" />
                </div>
                <div className='text'>
                    <h2>Mon Deuxième article</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia enim neque, animi, quaerat incidunt accusantium officia expedita laborum, explicabo similique dicta libero repudiandae sequi natus tempore eligendi consequuntur minima. Ex.</p>
                </div>
            </div>
        
        </div> 
    );
};

export default Article;