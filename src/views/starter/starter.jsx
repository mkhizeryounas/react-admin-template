import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, Row, Col } from 'reactstrap';

import {
  SalesSummary,
  Projects,
  Feeds,
} from '../../components/dashboard-components';
import './style.css';

const Starter = () => {
  return (
    <div>
      <Row>
        <Col sm={6} lg={3}>
          <Card>
            <CardBody>
              <CardTitle>
                <Row>
                  <div className='col overview-text'>1</div>
                  <div className='col-auto overview-icon'>
                    <i className='ti-export'></i>
                  </div>
                </Row>
              </CardTitle>
              <CardSubtitle>Campaigns Sent</CardSubtitle>
            </CardBody>
          </Card>
        </Col>

        <Col sm={6} lg={3}>
          <Card>
            <CardBody>
              <CardTitle>
                <Row>
                  <div className='col overview-text'>169K</div>
                  <div className='col-auto overview-icon'>
                    <i className='ti-user'></i>
                  </div>
                </Row>
              </CardTitle>
              <CardSubtitle>Revenue Generated</CardSubtitle>
            </CardBody>
          </Card>
        </Col>

        <Col sm={6} lg={3}>
          <Card>
            <CardBody>
              <CardTitle>
                <Row>
                  <div className='col overview-text'>Rs.1.71M</div>
                  <div className='col-auto overview-icon'>
                    <i className='ti-money'></i>
                  </div>
                </Row>
              </CardTitle>
              <CardSubtitle>Impressions Consumed</CardSubtitle>
            </CardBody>
          </Card>
        </Col>

        <Col sm={6} lg={3}>
          <Card>
            <CardBody>
              <CardTitle>
                <Row>
                  <div className='col'>
                    <span className='overview-text'>67K</span>{' '}
                    <span className='text-secondary'>/30,000</span>
                  </div>
                  <div className='col-auto overview-icon'>
                    <i className='ti-eye'></i>
                  </div>
                </Row>
              </CardTitle>
              <CardSubtitle>Campaigns Sent</CardSubtitle>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col sm={6} lg={8}>
          <SalesSummary />
        </Col>
        <Col sm={6} lg={4}>
          <Feeds />
        </Col>
      </Row>
      <Row>
        <Col sm={12}>
          <Projects />
        </Col>
      </Row>
    </div>
  );
};

export default Starter;
