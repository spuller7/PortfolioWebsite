import React, {Component} from 'react';
import '../css/footer.css';
 
import { NavLink } from 'react-router-dom';

export class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {show : true}
    }

    render() {
        return (
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-xs-12">
                            <div className="left-text-content">
                                <p>Copyright &copy; 2020 Travis Spuller</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}
