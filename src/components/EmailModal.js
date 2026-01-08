import React, {Component} from 'react';
import {Modal, Button, Row, Col, Form} from 'react-bootstrap';

import '../css/emailModal.css';

export class EmailModal extends Component {
    constructor(props) {
        super(props);
        this.state = {show : true}
    }

    render() {
        return (
            <Modal
            {...this.props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                Send Email
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="EmailModal-form">
                    <form action="mailto:travis.spuller@gmail.com" method="post" enctype="text/plain">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input 
                                type="text" 
                                id="name"
                                name="name" 
                                className="form-input"
                                placeholder="Your name"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="mail">Email</label>
                            <input 
                                type="email" 
                                id="mail"
                                name="mail" 
                                className="form-input"
                                placeholder="your.email@example.com"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="comment">Message</label>
                            <textarea 
                                id="comment"
                                name="comment" 
                                className="form-input form-textarea"
                                rows="5"
                                placeholder="Your message..."
                            ></textarea>
                        </div>
                        <div className="form-actions">
                            <Button type="submit" className="submit-button">Send</Button>
                        </div>
                    </form>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={this.props.onHide}>Close</Button>
            </Modal.Footer>
            </Modal>
        );
    }
}