/**
 * Created by einavcarmon on 17/04/2017.
 */
import React, {Component} from 'react';
import { Carousel, CarouselItem} from 'react-bootstrap';

export default class ControlledCarousel extends Component{

    constructor(props){
        super(props);
        this.state = {
            index: 0,
            direction: null,
            items:props.items
        }

        this.handleSelect = this.handleSelect.bind(this);
    }

    handleSelect(selectedIndex, e) {
        // alert('selected=' + selectedIndex + ', direction=' + e.direction);
        this.setState({
            index: selectedIndex,
            direction: e.direction
        });
    }

    render() {
        return (
            <Carousel activeIndex={this.state.index} direction={this.state.direction} onSelect={this.handleSelect}>
                {this.state.items.map((item) => {
                    return <CarouselItem key={item.key}>
                        <img width={350} height={350} alt="350X350" src={item.src}/>
                        <div className="carousel-caption">
                            <h3>{item.label}</h3>
                            <p>{item.text}</p>
                        </div>
                    </CarouselItem>
                })}
            </Carousel>
        );
    }
};

ControlledCarousel.defualtProps = {
    index: 0,
    direction: null,
    items: []
}