import React from 'react';
import {connect} from 'react-redux';
import {mainformTabSelected} from '../actions/mainform';

// UI
import Navbar from 'react-bootstrap/lib/Navbar';
import NavItem from 'react-bootstrap/lib/NavItem';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';
import Nav from 'react-bootstrap/lib/Nav';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import TxtResultList from "./txt_result_list";
import Utter from "./utter";
import Worker from './worker';
import Scheduler from "./scheduler/scheduler.js";

// CSS
import '../../css/mainform.css';

class MainForm extends React.Component{
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    handleSelect(key) {
        this.props.dispatch(mainformTabSelected(key));
    }

    render() {
        var content = <div/>;
        switch(this.props.activePageId) {
        case 1:
            content = <TxtResultList/>;
            break;
        case 2:
            content = <Utter/>;
            break;
        case 3:
            content = <Worker/>;
            break;
        case 4:
            content = <Scheduler/>;
            break;
        default:
            content = <div/>;
            break;
        }
        return (
                <div>
                <Navbar brand="Tx Portal" activeKey={this.props.activePageId} fixedTop={true} fluid={true}>
                <Nav>
		<NavDropdown eventKey={1} title="TXT" id="txt-dropdown">
                    <MenuItem eventKey="1.1" href="javascript:void(0);" onSelect={this.handleSelect.bind(this, 1)}>Results</MenuItem>
                    <MenuItem eventKey="1.2">Statistics</MenuItem>
                    <MenuItem eventKey="1.3" href="javascript:void(0);" onSelect={this.handleSelect.bind(this, 3)}>Workers</MenuItem>
		</NavDropdown>
		<NavDropdown eventKey={2} title="Utter" id="utter-dropdown">
                    <MenuItem eventKey="2.1" href="javascript:void(0);" onSelect={this.handleSelect.bind(this, 2)}>Results</MenuItem>
                    <MenuItem eventKey="2.2">Workers</MenuItem>
		</NavDropdown>
                </Nav>
                </Navbar>
                <div className='portal-content'> {content} </div>
                </div>
        )
    }
}

function select(state) {
    return state.mainform;
}

export default connect(select)(MainForm);
