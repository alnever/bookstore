import React from 'react'
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap'

export function BookCard(props) {
    return (
        <Card className='col-4 align-self-stretch'>
            <CardImg />
            <CardBody>
                <CardTitle>{props.book.title}</CardTitle>
                <CardSubtitle>{props.book.author}</CardSubtitle>
                <CardText />
                <Button outline color="success">{`Buy for ${props.book.price}`}</Button>
            </CardBody>
        </Card>
    )
}