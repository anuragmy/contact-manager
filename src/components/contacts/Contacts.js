import React, { Component } from 'react';
import Contact from './Contact';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { GET_CONTACTS } from '../../actions/types';

class Contacts extends Component {
	// state = {
	// 	contacts: [
	// 		{
	// 			id: 1,
	// 			name: 'John Doe',
	// 			email: 'john@gmail.com',
	// 			phone: '555-555-5555'
	// 		},
	// 		{
	// 			id: 2,
	// 			name: 'Karen Williams',
	// 			email: 'karen@gmail.com',
	// 			phone: '444-444-4444'
	// 		},
	// 		{
	// 			id: 3,
	// 			name: 'Henry Johnson',
	// 			email: 'henry@gmail.com',
	// 			phone: '333-333-333'
	// 		}
	// 	]
	// };

	componentDidMount() {
		this.props.getContacts();
	}
	render() {
		const { contacts } = this.props;
		return (
			<React.Fragment>
				<h1 className="display-4 mb-2">
					<span className="text-danger">Contact</span> List
				</h1>
				{contacts.map((contact) => <Contact key={contact.id} contact={contact} />)}
			</React.Fragment>
		);
	}
}

const mapStateToProps = (state) => ({
	contacts: state.contact.contacts
});

const mapDispatchToProps = (dispatch) => ({
	getContacts: () => dispatch({ type: GET_CONTACTS })
});

Contacts.propTypes = {
	contacts: PropTypes.array.isRequired,
	getContacts: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Contacts);
