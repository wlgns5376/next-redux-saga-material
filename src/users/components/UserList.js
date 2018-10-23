import { connect } from 'react-redux';
import React from 'react';
import {
    Typography,
    List,
    ListItem,
    ListItemText,
    ListItemAvatar,
    Avatar,
} from '@material-ui/core';
import { getUsers } from '../actions';

class UserList extends React.Component {
    componentDidMount() {
        const { getUsers } = this.props;

        getUsers(1);
    }

    render() {
        const { users } = this.props;
        return (
            <div>
                <List>
                {users.map((user) => (
                    <ListItem key={user.id}>
                        <ListItemAvatar>
                            <Avatar src={user.avatar} />
                        </ListItemAvatar>
                        <ListItemText
                          primary={user.last_name+' '+user.first_name}
                        />
                    </ListItem>
                ))}
                </List>
            </div>
        );
    }
};

export default connect(state => ({ ...state.users }), { getUsers })(UserList);

