import React, { Component } from 'react';
import { Row, Col } from 'antd';
import algoliasearch from 'algoliasearch';
import Box from '../../../components/utility/box';
import LayoutWrapper from '../../../components/utility/layoutWrapper';
import basicStyle from '../../../settings/basicStyle';
import { AlgoliaSearchConfig } from '../../../settings';
import ImageGallery from 'react-image-gallery';

const { apiKey, appId } = AlgoliaSearchConfig;

const client = algoliasearch(appId, apiKey);
const index = client.initIndex('default_search');


class DetailProduct extends Component {
    state = {
      name: '',
      description: '',
      categories: [],
      image: '',
      image2: '',
      image3: '',
      dimensions: '',
      powerSupply: '',
      weight: '',
      energyConsumption: '',
      shortCircuitRating: ''
    };

    componentDidMount() {
        const { objectID } = this.props.match.params;

        index.getObject(objectID, (err, content) => {
           if (err) throw err;
           const { name, description, categories, image,
           dimensions, powerSupply, weight, energyConsumption, shortCircuitRating, image2, image3 } = content;
           console.log(image);
           this.setState({
               name, description, categories, image, dimensions, powerSupply, weight,
               energyConsumption, shortCircuitRating, image2, image3
           });
        });

    }

    render() {
        const { name, description, categories, image, image2, image3, dimensions, powerSupply, weight,
        energyConsumption, shortCircuitRating } = this.state;
        const { rowStyle, colStyle, gutter } = basicStyle;
        const images = [
            {
                original: image,
                thumbnail: image
            },
            {
                original: image2,
                thumbnail: image2
            },
            {
                original: image3,
                thumbnail: image3
            },
        ];
        return (
            <div>
                <LayoutWrapper>
                            <Box>
                                <Row>
                                <Col md={7} sm={7} xs={24} style={colStyle}>
                                    <ImageGallery showPlayButton={false}
                                                  showFullscreenButton={false} items={images} />
                                </Col>
                                    <Col>
                                    <h1>{name}</h1>
                                        <p>{description}</p>
                                        <h1>Specification</h1>
                                        <p>Dimensions: {dimensions}</p>
                                        <p>Weight: {weight}</p>
                                        <p>Power supply: {powerSupply}</p>
                                        <p>Energy consumption: {energyConsumption}</p>
                                        <p>Short circuit rating: {shortCircuitRating}</p>
                                    </Col>
                                </Row>
                            </Box>
                </LayoutWrapper>
            </div>
        )
    }
}

export default DetailProduct;
