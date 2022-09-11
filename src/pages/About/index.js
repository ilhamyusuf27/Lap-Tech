import React from "react";
import Main from "../../layouts/Main";
import profileImage from "../../asset/images/profile.jpeg";

import { Col, Row, Typography, Card, Image, Space } from "antd";

function About() {
	const { Title } = Typography;
	return (
		<>
			<Main>
				<Row gutter={16}>
					<Col className="gutter-row" span={12}>
						<div className="title">
							<Title>About</Title>
						</div>
					</Col>
				</Row>

				<Row gutter={16}>
					<Col className="gutter-row" span={16}>
						<Card title="Lap-Tech" bordered={false}>
							<p className="justify">
								Lap-Tech merupakan dashboard untuk melihat data produk laptop, dimana data yang tersedia berupa merk laptop, title, seri, dan harga laptop yang tersedia. Aplikasi ini memiliki fitur
								paginasi dimana untuk setiap halamanannya akan menampilkan maksimal 10 data. Kemudian fitur selanjutnya adalah pencarian, fitur pencarian ini digunakan untuk mencari data produk laptop
								yang sedang dicari berdasar title produknya.
							</p>
						</Card>
					</Col>
					<Col className="gutter-row" span={8}>
						<Card title="Profile" bordered={false}>
							<Space direction="vertical" align="center" size={"large"}>
								<Image width={150} height={150} src={profileImage} style={{ borderRadius: "50%", objectFit: "cover" }} />
								<p className="justify">
									Hallo, perkenalkan nama saya Ilham Yusuf Alghani. Lulusan S1 Informatika Universitas AMIKOM Yogyakarta. Setelah lulus S1, saya melanjutkan pendidikan non-formal dengan mengikuti
									bootcamp di Pijar Camp dengan mempelajari Full-Stact Web Development seperti mempelajari ReactJs, NextJs, ExpressJs dan PostreSQL.
								</p>
							</Space>
						</Card>
					</Col>
				</Row>
			</Main>
		</>
	);
}

export default About;
