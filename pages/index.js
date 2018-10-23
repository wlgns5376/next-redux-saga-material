import {
    Typography,
    List,
    ListItem,
    ListItemText,
} from '@material-ui/core';
import { Link } from '../src/routes';

const ListItemLink = (props) => {
    return (
        <Link route={props.href}>
            <ListItem button component="a" {...props} />
        </Link>
    );
}

const Index = (props) => {

    return (
        <div>
            <Typography variant="h3" gutterBottom>
                Sample App
            </Typography>
            <List component="nav">
                <ListItemLink href="/users">
                    <ListItemText primary="users" />
                </ListItemLink>
            </List>
        </div>
    );
}

export default Index;