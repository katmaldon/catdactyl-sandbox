
import React from 'react';
import Gallery from '../Components/Gallery'


class GalleryContainer extends React.Component {

    render() {
        return (
            <div>
                <div className="gallery">
                    <Gallery
                        props={this.props}
                    />
                </div>
            </div>
        );
    }
}

export default GalleryContainer;
