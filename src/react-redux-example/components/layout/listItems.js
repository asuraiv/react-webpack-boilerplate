import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

export const mainListItems = (
	<div>
		<ListItem button>
			<ListItemIcon>
				<i className="material-icons">format_list_bulleted</i>
			</ListItemIcon>
			<ListItemText primary="게시판" />
		</ListItem>
	</div>
);