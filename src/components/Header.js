import React, {Component} from 'react';
import '../css/header.css';
 
import { NavLink } from 'react-router-dom';

export class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {emailModalShow : false, show : true}
    }

    render() {

        let emailModalClose =() => this.setState({emailModalShow:false});
        var type = this.props.isFixed ? 'Header--fixed' : 'drag-change';

        return (
            <header className={type}>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <nav className="main-nav">
                                <a className="logo" href="http://www.travisspuller.com">Travis Spuller</a>
                                <ul className="Navigation">
                                    <li><a className={this.props.isFixed ? '' : 'active'} href="/">Home</a></li>
                                    <li><a className={this.props.isFixed ? 'active' : ''} href="/portfolio">Portfolio</a></li>
                                    <li><a className="Button" onClick={()=> this.props.viewEmailModal()}>Contact</a></li>
                                </ul>
                                <a className="menu-trigger">
                                    <span>Menu</span>
                                </a>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}