import { Col, Form, Row } from 'antd';
import * as React from 'react';
import Abbr from '../Abbr';
import { GridProps } from '.index.d';
class DetailedGrid extends React.Component<GridProps<any>, {}> {
  render() {
    // tslint:disable-next-line: one-variable-per-declaration
    const gridData = this.props.detailedGridData,
      // 默认一行四个数据项
      defaultSpan = this.props.defaultSpan ?
        this.props.defaultSpan : 6
    return (
      <div className="detailed-grid-container">
        <Form layout="inline" style={{ marginBottom: 10 }}>
          <Row>
            {this.props.children}
            {
              this.props.keyWordsList
                ? this.props.keyWordsList.map((item, index) => {
                  return <Col
                    key={index}
                    span={
                      item.span
                        ? item.span
                        : defaultSpan
                    }>
                    <Form.Item label={
                      this.props.detailedGridData
                        ? item.label
                        : ''}>
                      {
                        item.render
                          ? item.render(gridData[item.key], gridData, index)
                          : this.props.detailedGridData
                            // 是否限制最大宽度
                            ? item.isAbbr
                              ? <Abbr text={gridData[item.key]} length={item.isAbbr} />
                              : gridData[item.key]
                            : ''
                      }
                    </Form.Item>
                  </Col>
                })
                : null
            }
          </Row>
        </Form>
      </div>
    )
  }
}

export default DetailedGrid
