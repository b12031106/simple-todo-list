import { Row, Col, Typography } from "antd";

export default function Header() {
    return (
        <Row justify={`center`}>
            <Col xs={22} sm={16} md={10}>
                <Typography.Title>Simple To-Do List</Typography.Title>
            </Col>
        </Row>
    );
}
