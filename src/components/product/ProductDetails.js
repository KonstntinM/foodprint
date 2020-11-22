import React from 'react';
import {
  Image,
  ImageSourcePropType,
  ImageStyle,
  ListRenderItemInfo,
  ScrollView,
  View,
} from 'react-native';
import { Button, Card, Icon, List, StyleService, Text, useStyleSheet } from '@ui-kitten/components';

import ImageOverlay from './ImageOverlay'

export default class ProductDetails extends React.Component {

  constructor (props) {
    super(props);
    this.product = { product: {"name":"Pralinés Milchcréme","barcode":"7622210598080","image":"https://static.openfoodfacts.org/images/products/762/221/059/8080/front_de.4.400.jpg","ingredients":[{"id":"en:sugar","value":0},{"id":"en:palm-oil","value":0},{"id":"en:oil-and-fat","value":0},{"id":"en:vegetable-oil-and-fat","value":0},{"id":"en:palm-oil-and-fat","value":0},{"id":"en:cocoa-butter","value":0},{"id":"en:cocoa","value":0},{"id":"en:skimmed-milk-powder","value":0},{"id":"en:dairy","value":10},{"id":"en:milk-powder","value":0},{"id":"en:sweet-whey-powder","value":0},{"id":"en:whey","value":0},{"id":"en:sweet-whey","value":10},{"id":"en:cocoa-paste","value":0},{"id":"en:butterfat","value":0},{"id":"en:fat","value":0},{"id":"en:milkfat","value":0},{"id":"en:emulsifier","value":0},{"id":"en:hazelnut-paste","value":0},{"id":"en:nut","value":0},{"id":"en:tree-nut","value":0},{"id":"en:hazelnut","value":0},{"id":"en:flavouring","value":0},{"id":"en:milk","value":0},{"id":"en:soya-lecithin","value":0},{"id":"en:e322","value":0},{"id":"en:e322i","value":0},{"id":"en:e476","value":0}],"packaging":[],"categories":["en:snacks","en:sweet-snacks","en:confectioneries","en:chocolate-candies","en:bonbons"],"score":20} }
  }

  renderDetailFooter() {
    return (
      <View>
        <Text
          category='s1'>
          Details
      </Text>
        <View style={styles.detailsList}>
          Hier und Da wie Wunderbar
        </View>
        <View style={styles.optionList}>
         Da sind die Optionen hier kannst du wohnen
        </View>
      </View>
    )
  }

  render() {
    return (
      <View>
        <Card
          style={styles.bookingCard}
          appearance='filled'
          disabled={true}
          footer={this.renderDetailFooter()}>
          <Text
            style={styles.title}
            category='h6'>
            {this.state.product.name}
          </Text>
          <Text
            style={styles.rentLabel}
            appearance='hint'
            category='p2'>
            Foodprint
          </Text>
          <Text
            style={styles.priceLabel}
            category='h6'>
            {this.state.product.score}
            <Text>{this.state.product.score}</Text>
          </Text>
          <Button
            style={styles.bookButton}
            onPress={ }>
            FIND ALTERNATIVES
          </Button>
        </Card>

      </View>
    );
  }
}

const styles = StyleService.create({
  container: {
    backgroundColor: 'background-basic-color-2',
  },
  image: {
    height: 360,
  },
  bookingCard: {
    marginTop: -80,
    margin: 16,
  },
  title: {
    width: '65%',
  },
  rentLabel: {
    marginTop: 24,
  },
  priceLabel: {
    marginTop: 8,
  },
  bookButton: {
    position: 'absolute',
    bottom: 24,
    right: 24,
  },
  detailsList: {
    flexDirection: 'row',
    marginHorizontal: -4,
    marginVertical: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    borderRadius: 16,
  },
  optionList: {
    flexDirection: 'row',
    marginHorizontal: -4,
    marginVertical: 8,
  },
  optionItem: {
    marginHorizontal: 4,
    paddingHorizontal: 0,
  },
  description: {
    marginHorizontal: 16,
    marginVertical: 8,
  },
  sectionLabel: {
    marginHorizontal: 16,
    marginVertical: 8,
  },
  imagesList: {
    padding: 8,
    backgroundColor: 'background-basic-color-2',
  },
  imageItem: {
    width: 180,
    height: 120,
    borderRadius: 8,
    marginHorizontal: 8,
  },
});