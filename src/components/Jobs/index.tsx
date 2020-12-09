import React from 'react';
import { Carousel } from 'antd';
import { Typography } from 'antd';
import { Divider } from 'antd';
import jobs from './jobs.module.less';

const { Title, Text } = Typography;

const Jobs: React.FC = () => {
  return (
    <div>
      <Divider>Experience</Divider>
      <Carousel>
        <div className={jobs.job}>
          <Title level={4}>
            <a href="https://www.opentext.com/">OpenText</a>
          </Title>
          <Title level={5}>Software Developer Intern</Title>
          <Text>
            Developed features for OpenText Media Management using JSP, Java,
            and SQL
          </Text>
        </div>
        <div className={jobs.job}>
          <Title level={4}>
            <a href="https://www.utoronto.ca/">University of Toronto</a>
          </Title>
          <Title level={5}>IT Help Desk Part-time</Title>
          <Text>
            Provided general in-person IT support as well as maintaining labs
          </Text>
        </div>
        <div className={jobs.job}>
          <Title level={4}>
            <a href="https://www.lakeridgehealth.on.ca/en/index.asp">
              Lakeridge Health
            </a>
          </Title>
          <Title level={5}>IT and Network Technician</Title>
          <Text>
            Provided IT help desk support across 5 Durham Region hospitals as
            well as hardware and network deployments
          </Text>
        </div>
        <div className={jobs.job}>
          <Title level={4}>
            <a href="https://www.mcdonalds.com/ca/en-ca.html">McDonald's</a>
          </Title>
          <Title level={5}>Crew Member</Title>
          <Text>pain</Text>
        </div>
      </Carousel>
    </div>
  );
};

export default Jobs;
