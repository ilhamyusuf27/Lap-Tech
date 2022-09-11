import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { HomeOutlined, QuestionCircleOutlined, ContactsOutlined } from "@ant-design/icons";
import { Layout, Menu, Image, Typography } from "antd";

import logo from "../../asset/images/logo.svg";

function Sidebar() {
	const location = useLocation();

	const { Sider } = Layout;
	const { Title } = Typography;

	const menu = [
		{
			icon: HomeOutlined,
			label: "Home",
			link: "/",
		},
		{
			icon: QuestionCircleOutlined,
			label: "About",
			link: "/about",
		},
		{
			icon: ContactsOutlined,
			label: "Contact",
			link: "/contact",
		},
	];

	const navigate = useNavigate();
	const currentLocation = location.pathname === "/" || location.pathname === "" ? "/" : location.pathname;

	const [current, setCurrent] = React.useState(currentLocation);

	React.useEffect(() => {
		if (current !== location.pathname) {
			setCurrent(location.pathname);
		}
	}, [location, current]);

	const handleMove = (e) => {
		setCurrent(e.key);
	};

	return (
		<Sider
			breakpoint="lg"
			collapsedWidth="0"
			onBreakpoint={(broken) => {
				// console.log(broken);
			}}
			onCollapse={(collapsed, type) => {
				// console.log(collapsed, type);
			}}
		>
			<div className="logo">
				<Image width={50} src={logo} preview={false} />
				<Title level={3} type="secondary">
					Lap-Tech
				</Title>
			</div>
			<Menu theme="dark" mode="inline" selectedKeys={current} onClick={handleMove}>
				{menu.map((item, index) => (
					<Menu.Item icon={<item.icon />} key={item.link} onClick={() => navigate(item.link)}>
						{item.label}
					</Menu.Item>
				))}
			</Menu>
		</Sider>
	);
}

export default Sidebar;
