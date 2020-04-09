import React from 'react';
import Gallery from '../../components/Gallery';
import UploadForm from '../../components/UploadForm'
import './style.css'

function Galleries(props) {
     
    return (
        <div>
            <UploadForm />
            <div className='galleries'>
                {props.galleries.map((gallery, index) => 
                    <Gallery 
                        id={gallery.id}
                        key={index} 
                        images={gallery.images} 
                        name={gallery.name}/>
                )}
            </div>
        </div>
    )
}

export default Galleries;