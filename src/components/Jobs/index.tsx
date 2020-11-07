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
          <Title level={5}>Fullstack Developer Intern</Title>
          <Text>
            {' '}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
            atque non accusamus quas mollitia ducimus eveniet modi quis incidunt
            recusandae cupiditate exercitationem fugiat, itaque nostrum.
            Corrupti enim maiores voluptatibus nihil!
          </Text>
        </div>
        <div className={jobs.job}>
          <Title level={4}>
            <a href="https://www.utoronto.ca/">University of Toronto</a>
          </Title>
          <Title level={5}>IT Help Desk Part-time</Title>
          <Text>
            {' '}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
            atque non accusamus quas mollitia ducimus eveniet modi quis incidunt
            recusandae cupiditate exercitationem fugiat, itaque nostrum.
            Corrupti enim maiores voluptatibus nihil!
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
            {' '}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
            atque non accusamus quas mollitia ducimus eveniet modi quis incidunt
            recusandae cupiditate exercitationem fugiat, itaque nostrum.
            Corrupti enim maiores voluptatibus nihil!
          </Text>
        </div>
        <div className={jobs.job}>
          <Title level={4}>
            <a href="https://www.mcdonalds.com/ca/en-ca.html">McDonald's</a>
          </Title>
          <Title level={5}>Crew Member</Title>
          <Text>
            {' '}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
            atque non accusamus quas mollitia ducimus eveniet modi quis incidunt
            recusandae cupiditate exercitationem fugiat, itaque nostrum.
            Corrupti enim maiores voluptatibus nihil!
          </Text>
        </div>
      </Carousel>
    </div>
  );
};

export default Jobs;
