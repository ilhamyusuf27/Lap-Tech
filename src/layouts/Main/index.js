import React from "react";
import { Layout } from "antd";
import Footers from "../Footer";
import Sidebar from "../Sidebar";

const { Content } = Layout;

function Main(props) {
	const { children } = props;
	return (
		<Layout>
			<Sidebar />
			<Layout>
				{/* <Header className="site-layout-sub-header-background" style={{ padding: 0 }} /> */}
				<Content style={{ margin: "24px 16px 0" }}>
					<div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
						{children}
					</div>
				</Content>
				<Footers />
			</Layout>
		</Layout>
	);
}

export default Main;
