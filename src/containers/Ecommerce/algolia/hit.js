import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Highlight, Snippet } from 'react-instantsearch/dom';
import Rate from '../../../components/uielements/rate';
import Button from '../../../components/uielements/button';
import { GridListViewWrapper } from '../../../components/algolia/algoliaComponent.style';
import ecommerceActions from '../../../redux/ecommerce/actions';
import { withRouter } from 'react-router-dom';


const { addToCart, changeViewTopbarCart } = ecommerceActions;

class Hit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addCartLoading: false,
    };
  }
  render() {
    const { hit } = this.props;
    const className =
      this.props.view === 'gridView'
        ? 'isoAlgoliaGrid GridView'
        : 'isoAlgoliaGrid ListView';
    let addedTocart = false;
    this.props.productQuantity.forEach(product => {
      if (product.objectID === hit.objectID) {
        addedTocart = true;
      }
    });
    const { url } = this.props;
    return (
      <GridListViewWrapper className={className}>
        <div className="isoAlGridImage">
          <img alt="#" src={hit.image} />
          {!addedTocart ? (
            <Button
              onClick={() => {
                /*this.setState({ addCartLoading: true });
                const update = () => {
                  this.props.addToCart(hit);
                  this.setState({ addCartLoading: false });
                };
                setTimeout(update, 1500);*/
                this.props.history.push(`detail/${hit.objectID}`);
              }}
              type="primary"
              className="isoAlAddToCart"
              loading={this.state.addCartLoading}
            >
              <i className="ion-eye" />
              Product detail
            </Button>
          ) : (
            <Button
              onClick={() => this.props.changeViewTopbarCart(true)}
              type="primary"
              className="isoAlAddToCart"
            >
              View Cart
            </Button>
          )}
        </div>
        <div className="isoAlGridContents">
          <div className="isoAlGridName">
            <Highlight attributeName="name" hit={hit} />
          </div>

          {/*<div className="isoAlGridPriceRating">
            <span className="isoAlGridPrice">${hit.price}</span>

            <div className="isoAlGridRating">
              <Rate disabled count={6} defaultValue={hit.rating} />
            </div>
          </div>*/}

          <div className="isoAlGridDescription">
            <Snippet attributeName="description" hit={hit} />
          </div>
        </div>
      </GridListViewWrapper>
    );
  }
}
function mapStateToProps(state) {
  const { view, productQuantity } = state.Ecommerce;
  return {
    view,
    productQuantity,
  };
}
export default connect(mapStateToProps, { addToCart, changeViewTopbarCart })(
  withRouter(Hit)
);
