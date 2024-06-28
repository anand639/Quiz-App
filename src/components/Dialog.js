import React from "react";
import PropTypes from "prop-types";
import { Dialog, DialogActions, DialogContent, DialogTitle, Button } from "@mui/material";

const CustomDialog = ({ open, handleClose, title, content }) => {
	return (
		<Dialog open={open} onClose={handleClose}>
			<DialogTitle>{title}</DialogTitle>
			<DialogContent>{content}</DialogContent>
			<DialogActions>
				<Button onClick={handleClose} color="primary">
					Close
				</Button>
			</DialogActions>
		</Dialog>
	);
};

CustomDialog.propTypes = {
	open: PropTypes.bool.isRequired,
	handleClose: PropTypes.func.isRequired,
	title: PropTypes.string.isRequired,
	content: PropTypes.node.isRequired,
};

export default CustomDialog;
