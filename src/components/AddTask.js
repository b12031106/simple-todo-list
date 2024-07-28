import { useDispatch } from "react-redux";
import { Row, Col, Form, Input, Button, Typography, message } from "antd";
import { tasksActions } from "../store/slices/tasksSlices";

export default function AddTask() {
    const [form] = Form.useForm();
    const dispatch = useDispatch();
    const [messageApi, contextHolder] = message.useMessage();

    const handleSubmit = () => {
        dispatch(
            tasksActions.addTask({
                title: form.getFieldValue(`title`),
                description: form.getFieldValue(`description`),
            })
        );
        form.resetFields();
        messageApi.open({
            type: "success",
            content: "add task success!",
        });
    };

    return (
        <Row justify={`center`}>
            <Col xs={22} sm={16} md={10}>
                {contextHolder}
                <Typography.Title level={2}>Add a task</Typography.Title>
                <Form
                    name="add-task"
                    form={form}
                    layout="vertical"
                    onFinish={handleSubmit}
                >
                    <Form.Item
                        rules={[
                            {
                                required: true,
                                message: "title cannot be empty",
                            },
                        ]}
                        label="task title"
                        name="title"
                    >
                        <Input placeholder="task title here" />
                    </Form.Item>
                    <Form.Item label="task description" name="description">
                        <Input.TextArea
                            autoSize={{ minRows: 2, maxRows: 6 }}
                            placeholder="task description here"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Add!
                        </Button>
                    </Form.Item>
                </Form>
            </Col>
        </Row>
    );
}
