import React, { Component } from 'react';
import { PageHeader } from 'antd';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import { connect } from 'react-redux';

import './Header.css';
import { fetchUser } from '../../actions';




class Header extends Component {

    constructor(props) {
        super(props);

        this.state =  {btnText: 'Login'};
    }

    //if we had back end
    // renderbtnText = () => {
    //     switch(this.props.auth){
    //         case null:
    //             return null;
    //         case false:
    //             return <Button key="1" type="primary">Login</Button>
    //         default:
    //             return <Button key="1" type="primary">Logout</Button>
    //     }
    // }

    renderbtnText = () => {
        if(this.state.btnText === "Logout"){
            this.setState({btnText: "Login"})
        } else {
            this.setState({btnText: "Logout"})
        }
    }


    render() {
        return (
            <div>
                <PageHeader
                className="site-page-header"
                title="my Messaging app"
                extra={[
                <Link to="/Home">
                <Button onClick={() => this.renderbtnText()} key="1" type="primary">
                {this.state.btnText}
                </Button>
                </Link>
                ]}
                >
                </PageHeader>
                
            </div>
        )
    }
}

const mapStateToProps = ({ auth }) => {
    if(!auth){
        return { auth: [
            {
                username: 'Alireza',
                profilePictureURL: 'http://alireza-gh.com/wp-content/uploads/2020/09/logo.jpg'

            }
        ] }
    }
    return { auth }
}


export default connect(mapStateToProps, { fetchUser })(Header)