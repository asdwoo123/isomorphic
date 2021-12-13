import React, {Component} from 'react';
import moment from 'moment';
import {Icon} from 'antd';
import {SingleCardWrapper} from './shuffle.style';
import {PhotoSwipeGallery} from 'react-photoswipe';
import {Subject} from 'rxjs';
import offset from 'mouse-event-offset';
import io from 'socket.io-client';
import {distinctUntilChanged} from "rxjs/operators";


const options = {};

export default class extends Component {
    state = {
        isOpen: false,
        visible: false,
        socket: null,
        ref: null
    };

    subject = null;
    subscription = null;

    componentDidMount() {
        const subject = new Subject();
        this.subject = subject;
    }

    handleClose = () => {
        this.setState({
            isOpen: false
        });
    };

    handleOpen = () => {
        this.setState({
            isOpen: true
        });
    };

    handleTouchStart = () => {
        const {url, port} = this.props;
        const socket = io(`http://${url}:${port}`, {
            path: '/socket.io'
        });
        this.setState({ socket });
        if (this.subject) {
            const subscription = this.subject.pipe(
                distinctUntilChanged()
            ).
            subscribe(e => {
                socket.emit('data', e);
            });
            this.subscription = subscription;
        }
    };

    handleTouchEnd = () => {
        const { socket } = this.state;
        socket.disconnect();
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };

    handleTouchMove = (e) => {
        const { target, changedTouches } = e;
        const pos = offset(changedTouches[0], target);
        let x = pos[0] / target.width;
        let y = pos[1] / target.height;
        x = x.toFixed(1) * 180 - 90;
        y = y.toFixed(1) * 180 - 90;
        this.subject.next({ x, y });
    };

    getThumbnailContent = (item) => (
        <img with={'100%'} height={'100%'}
             src={item.src}
             onLoad={() => this.setState({visible: true})}
             onError={() => this.setState({visible: false})}
             onTouchStart={this.handleTouchStart}
             onTouchEnd={this.handleTouchEnd}
             onTouchMove={this.handleTouchMove}
        />
    );

    render() {
        const {name, url, port} = this.props;
        const items = [
            {
                src: `http://${url}:${Number(port) + 1}?action=stream`,
                title: name,
                w: 1200,
                h: 900
            }
        ];

        const listClass = `isoSingleCard card ${this.props.view}`;
        const style = {zIndex: 100 - this.props.index, display: (this.state.visible) ? 'block' : 'none'};

        return (
            <SingleCardWrapper id={this.props.id} className={listClass} style={style}
            >
                <div style={{position: "relative"}} className="isoCardImage">
                    <PhotoSwipeGallery items={items}
                                       thumbnailContent={this.getThumbnailContent}
                    />
                </div>
                <div className="isoCardContent">
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                    <h3 className="isoCardTitle">{name}</h3>
                    </div>
                </div>
            </SingleCardWrapper>
        );
    }
}
