import {observer} from 'mobx-react-lite';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ProductStore from '../../store/ProductStore';
import {Product} from '../../models/Product';
import {Card} from '@rneui/base';
import * as React from 'react';

export const FavouriteScreen = observer(({navigation}: {navigation: any}) => {
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.products}
        data={ProductStore.products.filter(product => {
          return product.isLiked;
        })}
        renderItem={({item}) => FavouriteProductCartComponent(item)}
        keyExtractor={item => item.id}
      />
    </View>
  );
});

const FavouriteProductCartComponent = (product: Product) => {
  return (
    <TouchableOpacity onPress={() => {}}>
      <Card
        containerStyle={styles.product}
        wrapperStyle={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <Image
            style={{
              height: 64,
              width: 64,
              shadowColor: '#ff00ef',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.9,
              shadowRadius: 3,
            }}
            source={{uri: product.imageUrl}}
          />
          <View style={{marginStart: 16, justifyContent: 'center'}}>
            <Text style={{fontSize: 18, fontWeight: '500'}}>
              {product.title}
            </Text>
          </View>
        </View>
      </Card>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 16,
  },
  products: {
    flexDirection: 'column',
  },
  product: {
    margin: 8,
    borderRadius: 16,
    backgroundColor: 'rgba(246,246,246,0.18)',
    elevation: 4,
  },
});
