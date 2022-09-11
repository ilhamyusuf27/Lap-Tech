import React from "react";
import { Modal, Descriptions } from "antd";

function Modals(props) {
	const { isModalOpen, handleOk, handleCancel, data } = props;

	const formater = new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "IDR",
	});

	const currency = formater.format(data.price);

	return (
		<Modal title="Detail Product" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
			<Descriptions bordered column={1}>
				<Descriptions.Item label="Product">{data.title}</Descriptions.Item>
				<Descriptions.Item label="Merk">{data.merk}</Descriptions.Item>
				<Descriptions.Item label="Seri">{data.seri}</Descriptions.Item>
				<Descriptions.Item label="Price">{currency}</Descriptions.Item>
			</Descriptions>
		</Modal>
	);
}

export default Modals;
