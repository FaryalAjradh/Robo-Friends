import React, { Component } from 'react';
import Card from './Card'; 

// if this class were a function it'd be a pure function or dumb function
class CardList extends Component {
    render() {
        // const cardArray = this.props.robots.map((user, i) => {
        //     return (<Card
        //             key={i}
        //             id={this.props.robots[i].id}
        //             name={this.props.robots[i].name}
        //             email={this.props.robots[i].email}
        //         />
        //     );
        // })
        return (
            <div>
                {this.props.robots.map((user, i) => {
                    return (<Card 
                            key={i} 
                            id={this.props.robots[i].id} 
                            name={this.props.robots[i].name} 
                            email={this.props.robots[i].email}
                        />
                    );
                })}
                {/* {cardArray} */}
            </div>
        );
    }
}

export default CardList;