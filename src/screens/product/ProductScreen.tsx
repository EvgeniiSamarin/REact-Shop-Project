import {observer} from 'mobx-react-lite';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import * as React from 'react';
import ProductStore from '../../store/ProductStore';
import CartStore from '../../store/CartStore';

// @ts-ignore
export const ProductScreen = observer(({route}) => {
  const {item} = route.params;
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={{
            width: '100%',
            aspectRatio: 1,
          }}
          source={{uri: item.imageUrl}}
        />
        <View style={{marginHorizontal: 16}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
                alignItems: 'center'
            }}>
            <Text style={{fontSize: 32, fontWeight: '600', color: 'black'}}>{item.title}</Text>
            <Text style={{fontSize: 24, fontWeight: '600', color: 'black'}}>{item.price}₽</Text>
          </View>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '500',
              marginTop: 8,
              color: 'gray',
            }}>
            {item.description}
          </Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 16,
          marginHorizontal: 16,
        }}>
        <Pressable
          onPress={() => {
            if (CartStore.cart.has(item.id)) {
              CartStore.removeFromCart(item.id);
            } else {
              CartStore.addToCart(item.id);
            }
          }}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 12,
            paddingHorizontal: 32,
            borderRadius: 16,
            backgroundColor: CartStore.cart.has(item.id) ? '#fE0000' : 'blue',
            width: '100%',
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 18,
              fontWeight: '500',
            }}>
            {CartStore.cart.has(item.id) ? 'Удалить' : 'Добавить'}
          </Text>
        </Pressable>
        <TouchableOpacity
          onPress={() => {
            ProductStore.handleFavourite(item);
          }}>
          {/*<StarOutlined size={24}/>*/}
        </TouchableOpacity>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    paddingBottom: 32,
  },
});
