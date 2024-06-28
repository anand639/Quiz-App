import React from "react";
import PropTypes from "prop-types";
import styles from "../styles/CustomButton.module.css";

const CustomButton = ({ onClick, children, customStyles }) => {
	return (
		<button className={`${styles.button} ${customStyles}`} onClick={onClick}>
			{children}
		</button>
	);
};

CustomButton.propTypes = {
	onClick: PropTypes.func.isRequired,
	children: PropTypes.node.isRequired,
	customStyles: PropTypes.string,
};

CustomButton.defaultProps = {
	customStyles: "",
};

export default CustomButton;
