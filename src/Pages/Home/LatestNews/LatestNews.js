import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const LatestNews = () => {
    return (
        <div className='bg-danger'>
            <Container>
                <div className='py-4 text-white'>
                    <h1>Latest News</h1>
                    <p className='w-50'>Read our latest news from the company or general medical news. Feel free to ask questions in comments for any news you find interesting.</p>
                </div>
                <Row xs={1} md={4} className="g-4 py-4">
                    <Col>
                      <Card>
                        <Card.Img variant="top" src="http://medicare.bold-themes.com/pshychiatrist/wp-content/uploads/sites/7/2015/10/post-2-640x480.jpg" />
                        <Card.Body>
                          <Card.Title>Who’s the inner you?</Card.Title>
                          <Card.Text>
                            Quisque tincidunt est et ex elementum semper. Suspendisse a ipsum et sapien interdum lacinia eu eget dolor. Donec accumsan dictum malesuada. Etiam at nisi orci.
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col>
                      <Card>
                        <Card.Img variant="top" src="http://medicare.bold-themes.com/pshychiatrist/wp-content/uploads/sites/7/2015/10/post-3-640x480.jpg" />
                        <Card.Body>
                          <Card.Title>Family matters most</Card.Title>
                          <Card.Text>
                            Duis tempor vestibulum ullamcorper. Nam sapien purus, tempus sit amet semper in, varius vel ipsum. Donec in neque sagittis, condimentum nisi tristique, feugiat augue.
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col>
                      <Card>
                        <Card.Img variant="top" src="http://medicare.bold-themes.com/pshychiatrist/wp-content/uploads/sites/7/2015/10/post-1-640x480.jpg" />
                        <Card.Body>
                          <Card.Title>Friends can help too!</Card.Title>
                          <Card.Text>
                            Integer facilisis pulvinar commodo. Integer sed placerat quam. Praesent dictum velit ut tempor molestie. Mauris dui magna, consectetur nec dignissim ut.
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                    <Col>
                      <Card>
                        <Card.Img variant="top" src="http://medicare.bold-themes.com/pshychiatrist/wp-content/uploads/sites/7/2015/10/post-7-640x480.jpg" />
                        <Card.Body>
                          <Card.Title>Helping your children</Card.Title>
                          <Card.Text>
                            Duis dictum turpis id eros vulputate, ac tristique elit interdum. Cras placerat molestie velit, quis auctor ex rutrum ac. Sed vitae egestas leo. 
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default LatestNews;