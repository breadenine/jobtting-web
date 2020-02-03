import React, { useState } from 'react';
import { AutoComplete, Button, Form, Col, Row, Input, Select, DatePicker } from 'antd';
import { Link } from 'react-router-dom';

const { Option } = Select;

const JobCreate = () => {
  const dataSource = ['삼성전자', '야놀자', '카카오'];
  const [name, setName] = useState('');
  const onSelect = (value) => {
    // 선택
    setName(value);
  };
  const onSearch = (value) => {
    // 타이핑
    setName(value);
  };

  return (
    <>
      <Form layout="vertical" hideRequiredMark>
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item label="기업명">
              <AutoComplete
                value={name}
                dataSource={dataSource}
                onSelect={onSelect}
                onSearch={onSearch}
                placeholder="input here"
              />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item label="Url">
              <Input style={{ width: '100%' }} addonBefore="http://" addonAfter=".com" placeholder="Please enter url" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item label="Owner">
              <Select placeholder="Please select an owner">
                <Option value="xiao">Xiaoxiao Fu</Option>
                <Option value="mao">Maomao Zhou</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Type">
              <Select placeholder="Please choose the type">
                <Option value="private">Private</Option>
                <Option value="public">Public</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Form.Item label="Approver">
              <Select placeholder="Please choose the approver">
                <Option value="jack">Jack Ma</Option>
                <Option value="tom">Tom Liu</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="DateTime">
              <DatePicker.RangePicker style={{ width: '100%' }} />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item label="Description">
              <Input.TextArea rows={4} placeholder="please enter url description" />
            </Form.Item>
          </Col>
        </Row>
      </Form>
      <div
        style={{
          position: 'absolute',
          right: 0,
          bottom: 0,
          width: '100%',
          borderTop: '1px solid #e9e9e9',
          padding: '10px 16px',
          background: '#fff',
          textAlign: 'right',
        }}
      >
        <Link to="/">
          <Button style={{ marginRight: 8 }}>취소</Button>
        </Link>
        <Button type="primary">등록</Button>
      </div>
    </>
  );
};

export default JobCreate;
