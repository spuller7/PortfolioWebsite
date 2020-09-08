import React, {Component} from 'react';
import {Modal, Button, Row, Col, Form} from 'react-bootstrap';
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export class ResumeModal extends Component {
    constructor(props) {
        super(props);
        this.state = {show : true, numPages: null, pageNumber: 1}
    }

    onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages, show:true });
    };

    render() {
        const { pageNumber, numPages } = this.state;
        return (
            <Modal
            {...this.props}
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body>
                <img src="images/cv.png" width={450}></img>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={this.props.onHide}>Close</Button>
            </Modal.Footer>
            </Modal>
        );
    }
}