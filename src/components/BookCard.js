import React from 'react'
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap'

export function BookCard(props) {
    console.log(props)
    return (
        <Card>
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