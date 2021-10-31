import React, { Component } from 'react';

class Card extends Component {
    render() {
        // all of this is JSX so we need to import React for it to work
        const { name, email, id } = this.props;
        return (
            <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
                <img alt='robo-pic' src={`https://robohash.org/${id}?200x200`} />
                <div>
                    <h2>{name}</h2>
                    <p>{email}</p>
                </div>
            </div>
        );
    }
}

export default Card;