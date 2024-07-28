import { Col, Row, Radio, Typography, Input } from "antd";

import {
    FILTER_TYPE_ALL,
    FILTER_TYPE_COMPLETED,
    FILTER_TYPE_UNCOMPLETED,
} from "../constants";

const options = [
    { label: "all", value: FILTER_TYPE_ALL },
    { label: "completed", value: FILTER_TYPE_COMPLETED },
    { label: "uncompleted", value: FILTER_TYPE_UNCOMPLETED },
];

export default function Filter({
    filterType,
    onFilterTypeChange,
    keyword,
    onKeywordChange,
}) {
    const handleTypeChange = (e) => {
        onFilterTypeChange(e.target.value);
    };

    const handleKeywordChange = (e) => {
        onKeywordChange(e.target.value);
    };

    return (
        <>
            <Row justify={`center`}>
                <Col xs={22} sm={16} md={10}>
                    <Typography.Title level={2}>
                        Filter By Status
                    </Typography.Title>
                    <Radio.Group
                        options={options}
                        onChange={handleTypeChange}
                        value={filterType}
                        optionType="button"
                        buttonStyle="solid"
                    />
                </Col>
            </Row>
            <Row justify={`center`}>
                <Col xs={22} sm={16} md={10}>
                    <Typography.Title level={2}>
                        Filter By Keyword
                    </Typography.Title>
                    <Input
                        placeholder="input filter keyword here"
                        allowClear
                        onChange={handleKeywordChange}
                        style={{ width: 200 }}
                        value={keyword}
                    />
                </Col>
            </Row>
        </>
    );
}
