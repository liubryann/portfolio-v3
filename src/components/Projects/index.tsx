import React from 'react';
import { Row, Col } from 'antd';
import { Card } from 'antd';
import { Divider } from 'antd';
import uimpactify from '../../img/uimpactify.gif';
import salesapp from '../../img/sales.gif';

const { Meta } = Card;

const Projects: React.FC = () => {
  return (
    <div>
      <Divider>Projects</Divider>
      <Row gutter={[32, 32]}>
        <Col xs={24} xl={12}>
          <Card hoverable cover={<img src={uimpactify} />}>
            <Meta
              title="U-Impactify"
              description="Social e-learning platform (private)"
            />
          </Card>
        </Col>
        <Col xs={24} xl={12}>
          <a href="https://github.com/eric-li18/sales-application">
            <Card hoverable cover={<img src={salesapp} />}>
              <Meta
                title="Sales Application"
                description="Mobile shopping platform"
              />
            </Card>
          </a>
        </Col>
      </Row>
    </div>
  );
};

export default Projects;
