import React, {Component} from 'react';
import {Row, Col} from 'antd';
import PropTypes from 'prop-types';
import {Icon} from 'react-icons-kit';
import {truck} from 'react-icons-kit/fa/truck';
import {clockO} from 'react-icons-kit/fa/clockO'

// component
import BlogEntryContainer from '../base/blog_entry/BlogEntryContainer';

// styles
import './css/LatestBlogCss.css';

class LatestBlog extends Component {
    render() {
        const {blogEntry} = this.props;
        return (
            <Row type="flex" justify="center" className="latest-blog">
                <Col span={15}>
                    <Row className="title">
                        <Col span={24}>
                            <h2>From The Blog</h2>
                            <hr/>
                        </Col>
                    </Row>
                    <Row>
                        {
                            blogEntry.map((item, index) => {
                                return <Col span={8}>
                                    <BlogEntryContainer key={index} image={item}/>
                                </Col>
                            })
                        }
                    </Row>
                    <Row className="benefit-item">
                        <Col span={8}>
                            <Row type="flex" justify="center">
                                <Col span={4}>
                                    <Icon size="45px" icon={truck} className="icon"/>
                                </Col>
                                <Col span={10} className="text">
                                    <p>FREE SHIPPING</p>
                                    <p>For all order over 99$</p>
                                </Col>
                            </Row>
                        </Col>
                        <Col span={8}>
                            <Row type="flex" justify="center">
                                <Col span={4}>
                                    <Icon size="45px" icon={clockO} className="icon"/>
                                </Col>
                                <Col span={10} className="text">
                                    <p>FREE SHIPPING</p>
                                    <p>For all order over 99$</p>
                                </Col>
                            </Row>
                        </Col>
                        <Col span={8}>
                            <Row type="flex" justify="center">
                                <Col span={4}>
                                    <Icon size="45px" icon={truck} className="icon"/>
                                </Col>
                                <Col span={10} className="text">
                                    <p>FREE SHIPPING</p>
                                    <p>For all order over 99$</p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        );
    }
}

LatestBlog.propTypes = {
    blogEntry: PropTypes.array,
};

LatestBlog.defaultProps = {
    blogEntry: [],
};

export default LatestBlog;