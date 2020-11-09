
import React from 'react';
import Home from '../Components/Home'


class HomeContainer extends React.Component {

    render() {
        return (
            <div>
                <div className="home">
                    <Home
                        props={this.props}
                    />
                </div>
            </div>
        );
    }
}

export default HomeContainer;
