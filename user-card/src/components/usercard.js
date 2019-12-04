import React from 'react';
import { Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap';


const UserCard = (props) => {
    return (
        <div>
            <Card>
                <CardImg top width="100%" src={props.url} alt="profile picture" />
                <CardBody>
                    <CardTitle>{props.name}</CardTitle>
                    <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                </CardBody>
            </Card>
            <Card>
                <CardBody>
                    <CardTitle>Card Title</CardTitle>
                    <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                </CardBody>
                <CardImg bottom width="100%" src="/assets/318x180.svg" alt="Card image cap" />
            </Card>
        </div>
    );
};

export default UserCard;