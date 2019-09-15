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
        const books = [];

        API.googleSearch(this.state.search)
            .then(res => {
               
                console.log(res)

                res.data.items.map(item => {
                    const book = {
                        id: item.id,
                        title: item.volumeInfo.title,
                        author: item.volumeInfo.authors? item.volumeInfo.authors.join(", ") : "No author listed",
                        description: item.volumeInfo.description || "No description provided",
                        image: item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.thumbnail : 
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxMwa6JMSUXCICkfC5gsd_zM48202tLrP2Oj9XDTXmmyT3TkFEdA",
                        link: item.volumeInfo.infoLink
                    }
                   
                    books.push(book)
                })
                
                //this.setState({ results: res.data.items })})
                
                this.setState({ results: books })})
            .catch(err => this.setState({ error: err.items }));
    }
    handleSave = (id) => {
        const book = this.state.results.find(book => book.id === id);
        
        API.saveBook({
            googleId: book.id,
            title: book.title,
            author: book.author,
            description: book.description,
            image: book.image,
            link: book.link

        })
        .then((book) => console.log(book))
        .catch(err => console.log(err))
    };
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="12">
                        <Jumbotron>
                            <h1>Search for Books!</h1>
                            <input type="text" name="search" className="m-3" onChange={this.handleInputChange} placeholder="Book Name" /><br />
                        <button type="submit" className="btn btn-success" onClick={this.handleSubmit}>Search</button>
                        </Jumbotron>
                       

                        {this.state.results.map(book => (
                            <Book
                                key={book.id}
                                title={book.title}
                                author={book.author}
                                description={book.description}
                                image={book.image}
                                link={book.link}
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