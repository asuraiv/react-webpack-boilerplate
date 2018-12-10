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
		<ListItem button>
			<ListItemIcon>
				<i className="material-icons">
					location_city
				</i>
			</ListItemIcon>
			<ListItemText primary="지자체 데이터 현황" />
		</ListItem>
		<ListItem button>
			<ListItemIcon>
				<i className="material-icons">
					share
				</i>
			</ListItemIcon>
			<ListItemText primary="버스노선" />
		</ListItem>
		<ListItem button>
			<ListItemIcon>
				<i className="material-icons">
					directions_bus
				</i>
			</ListItemIcon>
			<ListItemText primary="노선별 버스목록" />
		</ListItem>
	</div>
);