import React from 'react';
import { Card, CardBody, CardTitle, CardImg } from 'reactstrap';




const FollowerCards = props => {
    return (
        <div className="followers">
            {props.followers.map(follower => {
                return (
                    <Card className="followers-card">
                        <CardImg top width="100%" src={follower.avatar_url} alt="profile picture" />
                        <CardBody className="followers-body">
                            <CardTitle>Username: {follower.login}</CardTitle>
                        </CardBody>
                    </Card>
                )
            })}
        </div>
    )
}

export default FollowerCards;