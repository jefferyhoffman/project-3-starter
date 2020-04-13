import React, {useContext} from 'react';
import Gallery from '../../components/Gallery';
import UploadForm from '../../components/UploadForm'
import './style.css'
import AuthContext from '../../contexts/AuthContext'
function Galleries(props) {
     const value = useContext(AuthContext)
     console.log('yo', value.user)
    return (
        <div>
            <UploadForm />
            <hr className='transparent-hr' />
            <div className='galleries fade-in'>
                {value.user && value.user.galleries.map((image, index)=>(
                    <Gallery
                        id={index}
                        key={index}
                        images={image.images[0].imageURL}
                        name={image.name}
                        web={true}
                    />
                ))}
                {props.galleries.map((gallery, index) => 
                    <Gallery 
                        id={gallery.id}
                        key={index} 
                        images={gallery.images} 
                        name={gallery.name}
                        web={false}/>
                )}
            </div>
        </div>
    )
}

export default Galleries;