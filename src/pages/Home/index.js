import React from "react";
import Main from "../../layouts/Main";

import { Col, Row, Typography, Input, Space } from "antd";

// component
import TableData from "../../components/Table";
const { Title } = Typography;
const { Search } = Input;

function Home() {
	const [searchString, setSearchString] = React.useState("");
	const onSearch = (value) => setSearchString(value);

	return (
		<>
			<Main>
				<Row gutter={16}>
					<Col className="gutter-row" span={12}>
						<div className="title">
							<Title>Home</Title>
						</div>
					</Col>
					<Col className="gutter-row" span={3} offset={9}>
						<Space align="center" style={{ width: "100%", height: "100%" }}>
							<Search
								placeholder="Search by title"
								onSearch={onSearch}
								style={{
									width: "100%",
								}}
							/>
						</Space>
					</Col>
				</Row>

				<TableData search={searchString} />
			</Main>
		</>
	);
}

export default Home;
