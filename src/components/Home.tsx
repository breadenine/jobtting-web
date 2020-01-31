import React, { useState } from 'react';
import { Button, Drawer, Form, Col, Row, Input, Select, DatePicker } from 'antd';
import JobList from './JobList';
const { Option } = Select;

const Home: React.FC = () => {
  const [drawer, setDrawer] = useState({
    visible: false,
  });

  const showDrawer = () => {
    setDrawer({
      visible: true,
    });
  };

  const onClose = () => {
    setDrawer({
      visible: false,
    });
  };

  return (
    <>
      <Button type="primary" icon="plus" size="large" style={{ marginLeft: 'auto' }} onClick={showDrawer}>
        기업등록
      </Button>
      <JobList />
      <Drawer title="기업등록" width={'100%'} onClose={onClose} visible={drawer.visible}>
        <Form layout="vertical" hideRequiredMark>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item label="Name">
                <Input placeholder="Please enter user name" />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item label="Url">
                <Input
                  style={{ width: '100%' }}
                  addonBefore="http://"
                  addonAfter=".com"
                  placeholder="Please enter url"
                />
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
          <Button onClick={onClose} style={{ marginRight: 8 }}>
            취소
          </Button>
          <Button onClick={onClose} type="primary">
            등록
          </Button>
        </div>
      </Drawer>
    </>
  );
};

export default Home;
