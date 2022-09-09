import NotificationsIcon from '@mui/icons-material/Notifications';
import Badge from '@mui/material/Badge';
import React from 'react'
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import BasicMenu from '../BasicMenu/BasicMenu';

const NotificationBell = ({ iconColor, badgeContent }) => {
	const notifications = [
		{
			id:0,
			label: 'First notification',
		},
		{
			id:1,
			label: 'Second notification'
		},
		{
			id:2,
			label: 'Third notification'
		},
		{
			id:3,
			label: 'Fourth notification'
		},
		{
			id:4,
			label: 'Fifth notification'
		}

	]

	// Estado del componente de notificación
	const [open, setOpen] = React.useState(false);
	const [anchorEl, setAnchorEl] = React.useState(null);
  
	// Manejador de clicks en icono
	const handleOpen = (event) => {
		setAnchorEl(event.currentTarget)
		setOpen(true)
	}
  
	// Manejador de cerrar menu
	const handleClose = () => {
	  setOpen(false)
	}

	// Mensaje del tooltip
	const tooltipMessage = () => {
		if (notifications.length == 0) {
			return 'No tienes notificaciones nuevas';
		} else if (notifications.length == 1) {
			return 'Tienes una nueva notificación';
		} else {
			return `Tienes ${notifications.length} notificaciones nuevas.`;
		};
	};

	const tooltipTitle = tooltipMessage();

	return (
		<div>

			<Tooltip title={tooltipTitle}>
				<IconButton
					color={iconColor}
					onClick={notifications.length ? handleOpen : null}
				>
					<Badge
						badgeContent={notifications.length}
						color="error"
					>
						<NotificationsIcon />
					</Badge>
				</IconButton>
			</Tooltip>
			<BasicMenu
				open={open}
				anchorEl={anchorEl}
				handleClose={handleClose}
				menuItems={notifications}

			/>
		</div>
	);
};

export default NotificationBell