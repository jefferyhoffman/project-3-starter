import React, { Component } from 'react';



function Client() {
    // Setting our component's initial state
    const [client, setClient] = useState([])
    const [formObject, setFormObject] = useState({})
  
    // Load all books and store them with setBooks
    useEffect(() => {
      loadClientInfo()
    }, [])
  
    // Loads all books and sets them to books
    function loadClientInfo() {
      API.getBooks()
        .then(res => 
          setClient(res.data)
        )
        .catch(err => console.log(err));
    };
  
      return (
        <Container fluid>
          <Row>
            <Col size="md-6">
              <Jumbotron>
                <h1>What Books Should I Read?</h1>
              </Jumbotron>
              <form>
                <Input
                  onChange={handleInputChange}
                  name="title"
                  placeholder="Title (required)"
                />
                <Input
                  onChange={handleInputChange}
                  name="author"
                  placeholder="Author (required)"
                />
                <TextArea
                  onChange={handleInputChange}
                  name="synopsis"
                  placeholder="Synopsis (Optional)"
                />
                <FormBtn
                  disabled={!(formObject.author && formObject.title)}
                  onClick={handleFormSubmit}
                >
                  Submit Book
                </FormBtn>
              </form>
            </Col>
            <Col size="md-6 sm-12">
              <Jumbotron>
                <h1>Books On My List</h1>
              </Jumbotron>
              {books.length ? (
                <List>
                  {Client.map(book => {
                    return (
                      <ListItem key={book._id}>
                        <a href={"/books/" + book._id}>
                          <strong>
                            {book.title} by {book.author}
                          </strong>
                        </a>
                        <DeleteBtn onClick={() => deleteBook(book._id)} />
                      </ListItem>
                    );
                  })}
                </List>
              ) : (
                <h3>No Results to Display</h3>
              )}
            </Col>
          </Row>
        </Container>
      );
    }
  
  
  export default Client;
  