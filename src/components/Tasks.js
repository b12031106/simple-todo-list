import { Row, Col, Space, Typography } from "antd";
import Task from "./Task";

export default function Tasks({ tasks }) {
    return (
        <>
            <Row justify={`center`}>
                <Col xs={22} sm={16} md={10}>
                    <Typography.Title level={2}>Tasks</Typography.Title>
                </Col>
            </Row>
            <Row justify={`center`}>
                <Col xs={22} sm={16} md={10}>
                    <Space
                        direction="vertical"
                        size="large"
                        style={{ display: `flex` }}
                    >
                        {tasks.map((task) => {
                            return <Task key={task.id} task={task} />;
                        })}
                    </Space>
                </Col>
            </Row>
        </>
    );
}
