import React from 'react';
import { TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import { SafeAreaLayout } from '../../components/safe-area-layout.component';
import { ArrowIosBackIcon, BookmarkIcon, BookmarkOutlineIcon } from '../../components/icons';
import ContentView from '../../layouts/ecommerce/product-details-4';

import ProductDetails from '../components/product/ProductDetails'

export default class ProductDetailsScreen extends React.Component {

  renderBackAction() {
    return (
      <TopNavigationAction
        icon={ArrowIosBackIcon}
        onPress={navigation.goBack}
      />
    )
  }

  renderBookmarkAction() {
    return (
      <TopNavigationAction
        icon={bookmarked ? BookmarkIcon : BookmarkOutlineIcon}
        onPress={onBookmarkActionPress}
      />
    )
  }

  render() {
    return (
      <SafeAreaLayout
        style={styles.container}
        insets='top'>
        <TopNavigation
          title='Product Details'
          leftControl={renderBackAction()}
          rightControls={[renderBookmarkAction()]}
        />
        <ProductDetails>
          
        </ProductDetails>
      </SafeAreaLayout>
    );
  }
}