import React, { Component } from 'react';
import Carousel from "../carousel/carousel"

class Page extends Component {
    render() {
        return (<div>
            <Carousel
                list={[1,2,3,4,5]}
                template={(value,key,current) => <div key={key}>
                    {value} {current}
                </div>}
            />
        </div>);
    }
}
export default Page;
