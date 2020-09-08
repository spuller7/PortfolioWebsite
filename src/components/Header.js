import React, {Component} from 'react';

export class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {show : true}
    }

    render() {
        return (
            <header>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                        <nav className="main-nav">
                            <a className="logo" href="http://www.travisspuller.com">Travis Spuller</a>
                            <ul className="Navigation">
                                <li><a className="active">Home</a></li>
                                <li><a>Portfolio</a></li>
                                <li><a>Blog</a></li>
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