import React from 'react';
import Gallery from '../../components/Gallery';
import './style.css'

function Galleries(props) {
    return (
        <div>
            <div className='button'>
                <input type='file' id='upload'/>
            </div>
            <div className='galleries'>
                {props.galleries.map(gallery => 
                    <Gallery id={gallery.id} images={gallery.images} name={gallery.name}/>
                )}
            </div>
        </div>
    )
}

export default Galleries;