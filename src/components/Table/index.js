/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from "react";
import { Table } from "antd";

import record from "../../data/records.json";
import Modals from "../Modal";

function TableData(props) {
	const { search } = props;

	const [isModalOpen, setIsModalOpen] = React.useState(false);
	const [item, setItem] = React.useState({});
	const [data, setData] = React.useState(record);

	useEffect(() => {
		if (search.length === 0) {
			return setData(record);
		}

		const searchedObject = [];
		record.forEach((product) => {
			if (product.title.toLowerCase().includes(search.toLowerCase())) {
				searchedObject.push(product);
			}
		});
		setData(searchedObject);
	}, [data, search]);

	const showModal = () => {
		setIsModalOpen(true);
	};

	const handleOk = () => {
		setIsModalOpen(false);
	};

	const handleCancel = () => {
		setIsModalOpen(false);
	};

	const columns = [
		{
			title: "No",
			dataIndex: "id",
			key: "id",
			align: "center",
		},
		{
			title: "Merk",
			dataIndex: "merk",
			key: "merk",
			align: "center",
		},
		{
			title: "Product",
			dataIndex: "title",
			key: "title",
			align: "center",
		},
		{
			title: "Seri",
			key: "seri",
			dataIndex: "seri",
			align: "center",
		},
		{
			title: "Price",
			key: "price",
			dataIndex: "price",
			align: "center",
			render: (record) => {
				const formater = new Intl.NumberFormat("en-US", {
					style: "currency",
					currency: "IDR",
				});

				const currency = formater.format(record);
				return <p>{currency}</p>;
			},
		},
	];

	return (
		<>
			<Table
				columns={columns}
				dataSource={data}
				onRow={(record) => ({
					onClick: () => {
						setItem(record);
						showModal();
					},
				})}
				rowKey="id"
			/>
			<Modals isModalOpen={isModalOpen} handleOk={handleOk} handleCancel={handleCancel} data={item} />
		</>
	);
}

export default TableData;
