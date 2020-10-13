import React from 'react';
import Card from 'react-bootstrap/Card';


export default function BlogCard(props) {
    return (
        <div
            class=" blogCard mt-5"
            data-aos="zoom-in-up"
            data-aos-offset="100"
            data-aos-delay="50"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
        >
            <Card className="m-2">
                <Card.Img variant="top" src={props.img} />
                <Card.Body>
                    <Card.Title>{props.city}, {props.state}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{props.author}</Card.Subtitle>
                    <Card.Text>{props.text}</Card.Text>
                </Card.Body>
                <button class="delete" onClick={() => props.delete(props.id)}>Delete this Post</button>
            </Card>

        </div>
    )
}

