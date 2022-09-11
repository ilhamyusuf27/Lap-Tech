/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Main from "../../layouts/Main";

import { Card, Col, Row, Space, Typography, Form, Input, Button } from "antd";
import { LinkedinFilled, GoogleCircleFilled, GithubFilled, InstagramFilled } from "@ant-design/icons";
import FormInput from "../../components/FormInput";

function Contact() {
	const { Title } = Typography;
	const { TextArea } = Input;
	const [form] = Form.useForm();

	const style = { fontSize: "180%" };

	const data = [
		{
			icon: <GithubFilled style={style} />,
			title: "GitHub",
			link: "https://github.com/ilhamyusuf27",
		},
		{
			icon: <LinkedinFilled style={style} />,
			title: "LinkedIn",
			link: "https://www.linkedin.com/in/ilhamyusufalghani/",
		},
		{
			icon: <GoogleCircleFilled style={style} />,
			title: "ilhamyusuf276@gmail.com",
			link: "ilhamyusuf276@gmail.com",
		},
		{
			icon: <InstagramFilled style={style} />,
			title: "Instagram",
			link: "https://www.instagram.com/ilhamyusuf276/",
		},
	];
	return (
		<>
			<Main>
				<Row gutter={16}>
					<Col className="gutter-row" span={12}>
						<div className="title">
							<Title>Contact us</Title>
						</div>
					</Col>
				</Row>

				<Row gutter={16}>
					<Col className="gutter-row" span={16}>
						<Card>
							<Form form={form} layout="vertical">
								<Row gutter={16}>
									<Col className="gutter-row" span={12}>
										<FormInput label="First name" placeholder="Enter your first name" />
									</Col>
									<Col className="gutter-row" span={12}>
										<FormInput label="Last name" placeholder="Enter your last name" />
									</Col>
								</Row>

								<Row gutter={16}>
									<Col className="gutter-row" span={12}>
										<FormInput label="E-mail" placeholder="Enter your e-mail" />
									</Col>
									<Col className="gutter-row" span={12}>
										<FormInput label="Phone number" placeholder="Enter your phone number" />
									</Col>
								</Row>
								<Form.Item label="Message" required tooltip="This is a required field">
									<TextArea rows={4} placeholder="Enter your message" maxLength={255} />
								</Form.Item>

								<Form.Item>
									<Button type="primary" htmlType="submit">
										Submit
									</Button>
								</Form.Item>
							</Form>
						</Card>
					</Col>
					<Col className="gutter-row" span={8}>
						<Card>
							<Space direction="vertical">
								{data.map((item, index) => (
									<div className="socialMedia" key={index}>
										{item.icon}
										<a href={item.link} target="_blank" rel="noreferrer">
											{item.title}
										</a>
									</div>
								))}
							</Space>
						</Card>
					</Col>
				</Row>
			</Main>
		</>
	);
}

export default Contact;
