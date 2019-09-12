import React, { Component } from 'react';
import API from "../utils/API";
import Book from "../components/Book";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";

class FormSearch extends Component {
    state = {
        search: "",
        results: []
    }
    handleInputChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value })
    }
    handleSubmit = e => {
        e.preventDefault();
        console.log(e.target)
        API.googleSearch(this.state.search)
            .then(res => this.setState({ results: res.data.items }))
            .catch(err => this.setState({ error: err.items }));
    }
    handleSave = (id) => {
        const book = this.state.results.find(book => book.id === id);
        console.log(book)
        API.saveBook({
            googleId: book.id,
            title: book.volumeInfo.title,
            author: book.volumeInfo.authors.join(", "),
            description: book.volumeInfo.description,
            image: book.volumeInfo.imageLinks.thumbnail,
            link: book.volumeInfo.infoLink

        }).then((book) => console.log(book));
    };
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="12">
                        <Jumbotron>
                            <h1>Search for Books!</h1>
                        </Jumbotron>
                        <input type="text" name="search" onChange={this.handleInputChange} placeholder="Book Name" />
                        <button type="submit" onClick={this.handleSubmit}>Search</button>

                        {this.state.results.map(book => (
                            <Book
                                key={book.id}
                                title={book.volumeInfo.title}
                                authors={book.volumeInfo.authors}
                                description={book.volumeInfo.description}
                                image={book.volumeInfo.imageLinks.thumbnail}
                                link={book.volumeInfo.infoLink}
                                id={book.id}
                                handleSave={this.handleSave}
                            />
                        ))}
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default FormSearch;