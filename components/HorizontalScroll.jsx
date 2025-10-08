// HorizontalScroll.jsx
import { useRef } from 'react';
import { Animated, Dimensions, StyleSheet, View } from 'react-native';

const { width } = Dimensions.get('window');
const ITEM_WIDTH = width * 0.8; // width of each item
const SPACING = 15;

const data = [
  {
    id: '1',
    image: 'https://www.fastfoodclub.com/wp-content/uploads/2025/03/Hot-Fast-Food-Deals-Dropping-Now-at-Dominos-Pizza-Hut-and-More.png',
    title: 'Burger Sale Hot Deals',
  },
  {
    id: '2',
    image: 'https://www.fastfoodclub.com/wp-content/uploads/2025/01/Fast-Food-Deals-You-Cant-Miss-from-Burger-King-KFC-and-More.png',
    title: 'Walmart Deli Meal Deal',
  },
  {
    id: '3',
    image: 'https://www.circlek.com/sites/default/files/2025-08/mealdeal-site.jpg',
    title: 'Circle K Meal Deals',
  },
];


const HorizontalScroll = () => {
  const scrollX = useRef(new Animated.Value(0)).current;

  return (
    <Animated.FlatList
      data={data}
      keyExtractor={(item) => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
      snapToInterval={ITEM_WIDTH + SPACING}
      decelerationRate="fast"
      contentContainerStyle={{ paddingHorizontal: SPACING }}
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
        { useNativeDriver: true }
      )}
      renderItem={({ item, index }) => {
        const inputRange = [
          (index - 1) * (ITEM_WIDTH + SPACING),
          index * (ITEM_WIDTH + SPACING),
          (index + 1) * (ITEM_WIDTH + SPACING),
        ];

        const scale = scrollX.interpolate({
          inputRange,
          outputRange: [0.9, 1.1, 0.9], // center item grows
          extrapolate: 'clamp',
        });

        const textScale = scrollX.interpolate({
          inputRange,
          outputRange: [1, 1.2, 1], // text grows with image
          extrapolate: 'clamp',
        });

        return (
          <View style={{ width: ITEM_WIDTH, marginRight: SPACING }}>
            <Animated.Image
              source={{ uri: item.image }}
              style={[styles.image, { transform: [{ scale }] }]}
            />
            <Animated.Text style={[styles.title, { transform: [{ scale: textScale }] }]}>
              {item.title}
            </Animated.Text>
          </View>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 150,
    borderRadius: 25,
  },
  title: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default HorizontalScroll;
