import React from 'react'
import { Button } from 'reactstrap'

export function Toolbar() {
    return (
        <div className="d-flex flex-row p-2 justify-content-start">
            <Button outline color="success">Add a new book</Button>
        </div>
    )
}