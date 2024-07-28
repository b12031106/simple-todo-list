import { Col, Row, Radio, Typography } from "antd";
import { SORT_TYPE_ASC, SORT_TYPE_DESC } from "../constants";

const options = [
    { label: "descend", value: SORT_TYPE_DESC },
    { label: "ascend", value: SORT_TYPE_ASC },
];

export default function Sorting({ sortType, onSortTypeChange }) {
    const handleChange = (e) => {
        onSortTypeChange(e.target.value);
    };
    return (
        <Row justify={`center`}>
            <Col xs={22} sm={16} md={10}>
                <Typography.Title level={2}>
                    Sort By Create Time
                </Typography.Title>
                <Radio.Group
                    options={options}
                    onChange={handleChange}
                    value={sortType}
                    optionType="button"
                    buttonStyle="solid"
                />
            </Col>
        </Row>
    );
}
