import React from "react";

import { Form, Input } from "antd";

function FormInput(props) {
	const { label, placeholder } = props;
	return (
		<Form.Item label={label} required tooltip="This is a required field">
			<Input placeholder={placeholder} />
		</Form.Item>
	);
}

export default FormInput;
