import React from 'react'
import { Button } from 'reactstrap'

export function Header() {
    return (
        <header>
            <div className="jumbotron">
                <h1 className="display-4">
                    Awesome Book Store
                </h1>
                <p className="lead">
                    You will allways have something to read
                </p>
                <hr className="my-4" />
                <p>We prepared an excelent conllection of science fiction, crimis, and love stories. Just click the button below</p>
                <Button color="primary">Learn more</Button>
            </div>
        </header>
    )
}
