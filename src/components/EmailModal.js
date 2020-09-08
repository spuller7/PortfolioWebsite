import React, {Component} from 'react';
import {Modal, Button, Row, Col, Form} from 'react-bootstrap';
import $ from 'jquery';

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
                <div>
                    <form action="mailto:travis.spuller@gmail.com" method="post" enctype="text/plain">
                        Name:<br />
                        <input type="text" name="name" /><br />
                        E-mail:<br />
                        <input type="text" name="mail" /><br />
                        Comment:<br />
                        <input type="text" name="comment" size="50" />
                        <input type="submit" value="Send" />
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

$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    var box = $('.MainBanner').height();
    var header = $('header').height();
  
    if (scroll >= box - header) {
      $("header").addClass("Header--fixed");
    } else {
      $("header").removeClass("Header--fixed");
    }
});