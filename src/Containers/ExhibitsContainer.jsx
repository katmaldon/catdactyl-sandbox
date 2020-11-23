
import React from 'react';
import Exhibits from '../Components/Exhibits'


class ExhibitsContainer extends React.Component {

    render() {
        return (
            <div>
                <div className="exhibits">
                    <Exhibits
                        props={this.props}
                    />
                </div>
            </div>
        );
    }
}

export default ExhibitsContainer;
