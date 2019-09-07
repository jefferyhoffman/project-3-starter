import React from 'react';

const PostPostIt = props => {
  const postImageArray = [
    'https://www.eu40.eu/wp-content/uploads/2018/07/180716_EU40_SummerBBQ-1.png',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt-08IO190CARcDb8U3nrja8UPFm9J-M2L55Gzr7DHCLirbp8nkQ',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOvXDmswF3TMFdCMpw5KYslXlayZ00uT4NISWc6fMirfhsnc3s'
  ];
  const postImage =
    postImageArray[Math.floor(Math.random() * postImageArray.length)];

  return (
    <div className='card text-center'>
      <div>
        <img
          src={postImage}
          alt='url'
          className='roundImg'
          style={{ width: '60px ' }}
        />
        <h5>{props.post_title}</h5>
      </div>
      <div>
        <p>{props.post_details}</p>
        <a href={props.html_url} className='btn btnDark btn-sm my1'>
          {' '}
          More{' '}
        </a>
      </div>
    </div>
  );
};

export default PostPostIt;
