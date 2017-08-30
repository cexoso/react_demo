import React, { Component } from "react";
import './carousel.css';
import { map, size } from "lodash"

class carousel extends Component {
    constructor(props) {
        super(props)
        this.listSize = size(this.props.list);
    }
    componentDidMount() {
        setTimeout(this.next, 1000)
    }
    state = {
        current: 0
    }
    next = () => {
        this.setState({
            current: (this.state.current + 1) % this.listSize
        })
        setTimeout(this.next, 1000)
    }
    render() {
        const { list, template } = this.props
        return (
            <div>
                {map(list, (value, key) => template(value, key, this.state.current))}
            </div>
        );
    }
}

export default carousel;