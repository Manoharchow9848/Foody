import { Ionicons } from '@expo/vector-icons';
import { Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const { width } = Dimensions.get('window');
const ITEM_WIDTH = width * 0.5; // each food item half of screen width
const SPACING = 15;

const trendingData = [
  { id: '1', name: 'Cheese Burger', price: '$5.99', image: 'https://img.icons8.com/fluency/100/000000/hamburger.png' },
  { id: '2', name: 'Veg Pizza', price: '$8.99', image: 'https://img.icons8.com/fluency/100/000000/pizza.png' },
  { id: '3', name: 'Ice Cream', price: '$3.49', image: 'https://img.icons8.com/fluency/100/000000/ice-cream-cone.png' },
  { id: '4', name: 'French Fries', price: '$2.99', image: 'https://img.icons8.com/fluency/100/000000/french-fries.png' },
];

const TrendingSection = () => {
  return (
    <View style={styles.container}>
      {/* Top Row */}
      <View style={styles.header}>
        <Text style={styles.title}>Trending</Text>
        <TouchableOpacity style={styles.seeAll}>
          <Text style={styles.seeAllText}>See All</Text>
          <Ionicons name="arrow-forward-outline" size={16} color="#FF4500" />
        </TouchableOpacity>
      </View>

      {/* Horizontal Scroll */}
      <FlatList
        data={trendingData}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: SPACING, paddingVertical: 10 }}
        renderItem={({ item }) => (
          <View style={[styles.foodBox, { width: ITEM_WIDTH, marginRight: SPACING }]}>
            <Image source={{ uri: item.image }} style={styles.foodImage} />
            <Text style={styles.foodName} numberOfLines={1} ellipsizeMode="tail">
              {item.name}
            </Text>
            <Text style={styles.foodPrice}>{item.price}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: SPACING,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  seeAll: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  seeAllText: {
    color: '#FF4500',
    fontWeight: 'bold',
    marginRight: 5,
  },
  foodBox: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 10,
    alignItems: 'center',
    elevation: 2,
  },
  foodImage: {
    width: '100%',
    height: 120,
    borderRadius: 12,
  },
  foodName: {
    marginTop: 5,
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center',
  },
  foodPrice: {
    marginTop: 3,
    color: 'gray',
    fontSize: 12,
  },
});

export default TrendingSection;
