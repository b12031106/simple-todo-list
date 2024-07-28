import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import {
    Card,
    Input,
    Space,
    Tag,
    Tooltip,
    Popconfirm,
    Modal,
    Form,
} from "antd";
import {
    CloseOutlined,
    CheckCircleOutlined,
    DeleteOutlined,
    EditOutlined,
} from "@ant-design/icons";

import { tasksActions } from "../store/slices/tasksSlices";

export default function Task({ task }) {
    const [form] = Form.useForm();
    const [isModalVisible, setIsModalVisible] = useState(false);
    const dispatch = useDispatch();

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleModalOk = () => {
        dispatch(
            tasksActions.updateTaskDescription({
                id: task.id,
                description: form.getFieldValue("description"),
            })
        );
        setIsModalVisible(false);
    };

    const handleModalCancel = () => {
        form.setFieldValue("description", task.description);
        setIsModalVisible(false);
    };

    const handleToggleTask = () => {
        dispatch(tasksActions.toggleTask(task.id));
    };

    const handleEditClick = () => {
        showModal();
    };

    const handleDeleteTask = () => {
        dispatch(tasksActions.deleteTask(task.id));
    };

    return (
        <>
            <Card
                title={
                    <Space>
                        {task.title}
                        {task.completed && (
                            <Tag icon={<CheckCircleOutlined />} color="success">
                                completed!
                            </Tag>
                        )}
                    </Space>
                }
                actions={[
                    <Tooltip
                        placement="bottom"
                        title={`make ${
                            task.completed ? "uncompleted" : "completed"
                        }`}
                    >
                        {task.completed ? (
                            <CloseOutlined onClick={handleToggleTask} />
                        ) : (
                            <CheckCircleOutlined onClick={handleToggleTask} />
                        )}
                    </Tooltip>,
                    <Tooltip placement="bottom" title={"edit description"}>
                        <EditOutlined onClick={handleEditClick} />
                    </Tooltip>,
                    <Popconfirm
                        title="Delete the task"
                        description="Are you sure to delete this task?"
                        onConfirm={handleDeleteTask}
                        okText="Yes"
                        cancelText="No"
                    >
                        <Tooltip placement="bottom" title={"delete task"}>
                            <DeleteOutlined />
                        </Tooltip>
                    </Popconfirm>,
                ]}
            >
                {task.description && (
                    <Card.Meta description={<p>{task.description}</p>} />
                )}
                <p>Create Time: {new Date(task.createdAt).toString()}</p>
            </Card>
            <Modal
                title="Edit description"
                open={isModalVisible}
                onOk={handleModalOk}
                onCancel={handleModalCancel}
            >
                <Form form={form} layout="vertical">
                    <Form.Item label="task description" name="description">
                        <Input.TextArea
                            autoSize={{ minRows: 2, maxRows: 6 }}
                            placeholder="task description here"
                            value={task.description}
                        />
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
}
