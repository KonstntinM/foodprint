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
import { ImageOverlay } from '../components/product/image-overlay.component';
import { Product, ProductOption } from '../components/product/data';
import Score from '../components/product/Score'

const product = {"name":"Pralinés Milchcréme","barcode":"7622210598080","image":"https://static.openfoodfacts.org/images/products/762/221/059/8080/front_de.4.400.jpg","ingredients":[{"id":"en:sugar","value":0,"name":"sugar"},{"id":"en:palm-oil","value":0,"name":"palm-oil"},{"id":"en:oil-and-fat","value":0,"name":"oil-and-fat"},{"id":"en:vegetable-oil-and-fat","value":0,"name":"vegetable-oil-and-fat"},{"id":"en:palm-oil-and-fat","value":0,"name":"palm-oil-and-fat"},{"id":"en:cocoa-butter","value":0,"name":"cocoa-butter"},{"id":"en:cocoa","value":0,"name":"cocoa"},{"id":"en:skimmed-milk-powder","value":0,"name":"skimmed-milk-powder"},{"id":"en:dairy","value":10,"name":"dairy"},{"id":"en:milk-powder","value":0,"name":"milk-powder"},{"id":"en:sweet-whey-powder","value":0,"name":"sweet-whey-powder"},{"id":"en:whey","value":0,"name":"whey"},{"id":"en:sweet-whey","value":10,"name":"sweet-whey"},{"id":"en:cocoa-paste","value":0,"name":"cocoa-paste"},{"id":"en:butterfat","value":0,"name":"butterfat"},{"id":"en:fat","value":0,"name":"fat"},{"id":"en:milkfat","value":0,"name":"milkfat"},{"id":"en:emulsifier","value":0,"name":"emulsifier"},{"id":"en:hazelnut-paste","value":0,"name":"hazelnut-paste"},{"id":"en:nut","value":0,"name":"nut"},{"id":"en:tree-nut","value":0,"name":"tree-nut"},{"id":"en:hazelnut","value":0,"name":"hazelnut"},{"id":"en:flavouring","value":0,"name":"flavouring"},{"id":"en:milk","value":0,"name":"milk"},{"id":"en:soya-lecithin","value":0,"name":"soya-lecithin"},{"id":"en:e322","value":0,"name":"e322"},{"id":"en:e322i","value":0,"name":"e322i"},{"id":"en:e476","value":0,"name":"e476"}],"packaging":[],"categories":["en:snacks","en:sweet-snacks","en:confectioneries","en:chocolate-candies","en:bonbons"],"score":20}

const image = require('../../assets/img/image-product.jpg')

export default ({ route }): React.ReactElement => {

  const styles = useStyleSheet(themedStyles);

  //const { product } = route.params;

  product.primaryCategory = product.categories[0].substring(product.categories[0].indexOf(':')+1)
  product.primaryCategory = product.primaryCategory.charAt(0).toUpperCase() + product.primaryCategory.slice(1)

  const onBookButtonPress = (): void => {
    console.log("Button pressed!");
    
  };

  const renderOptionItemIcon = (style: ImageStyle, icon: string): React.ReactElement => (
    <Icon {...style} name={icon}/>
  );

  const renderOptionItem = (option: ProductOption, index: number): React.ReactElement => (
    <Button
      key={index}
      style={styles.optionItem}
      appearance='ghost'
      size='small'
      icon={(style: ImageStyle) => renderOptionItemIcon(style, option.icon)}>
      {option.name}
    </Button>
  );

  const renderDetailItem = (detail: string, index: number): React.ReactElement => (
    <Button
      key={index}
      style={styles.detailItem}
      appearance='outline'
      size='tiny'>
      {detail.substring(detail.indexOf(":")+1)}
    </Button>
  );

  const renderBookingFooter = (): React.ReactElement => (
    <View>
      <Text
        category='s1'>
        Ingredients
      </Text>
      <View style={styles.detailsList}>
        {product.categories.map(renderDetailItem)}
      </View>
      <View style={styles.optionList}>
        {product.ingredients.map(renderOptionItem)}
      </View>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <ImageOverlay
        source={{uri: product.image}}
        imageStyle={{resizeMode: 'stretch'}}
        style={styles.image}
      />
      <Card
        style={styles.bookingCard}
        appearance='filled'
        disabled={true}
        footer={renderBookingFooter}>
        <Text
          style={styles.title}
          category='h6'>
          {product.name}
        </Text>
        <Text
          appearance='hint'
          category='p2'>
          {product.primaryCategory}
        </Text>
        <View>

        </View>
        <Score/>
        <Text
          style={styles.priceLabel}
          category='h6'>
          {product.score}
        </Text>
      </Card>
    </ScrollView>
  );
};

const themedStyles = StyleService.create({
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
