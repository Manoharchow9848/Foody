import { Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';

const { width } = Dimensions.get('window');
const ITEM_WIDTH = (width - 60) / 4; // 4 boxes with spacing

const categories = [
  { id: '1', title: 'Trending', image: 'https://img.icons8.com/fluency/100/000000/fire-element.png' },
  { id: '2', title: 'Cakes', image: 'https://img.icons8.com/fluency/100/000000/cake.png' },
  { id: '3', title: 'Decoration', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF7hFp3fro3N6F0zaxIhKiJlOBZE9fK2xK9Q&s' },
  { id: '4', title: 'Gifts', image: 'https://img.icons8.com/fluency/100/000000/gift.png' },
  { id: '5', title: 'Hire MuA', image: 'https://img.icons8.com/fluency/100/000000/makeup.png' },
  { id: '6', title: 'Video Grapher', image: 'https://img.icons8.com/fluency/100/000000/video.png' },
  { id: '7', title: 'Photo Grapher', image: 'https://img.icons8.com/fluency/100/000000/camera.png' },
  { id: '8', title: 'View All', image: 'https://img.icons8.com/fluency/100/000000/more.png' },
];

const Categories = () => {
  const handlePress = (item) => {
    console.log('Pressed:', item.title);
    
  };

  return (
    <FlatList
      data={categories}
      keyExtractor={(item) => item.id}
      numColumns={4}
      columnWrapperStyle={{ justifyContent: 'space-between', marginBottom: 15 }}
      contentContainerStyle={{ paddingHorizontal: 10, paddingVertical: 10 }}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={[styles.box, { width: ITEM_WIDTH }]}
          onPress={() => handlePress(item)}
          activeOpacity={0.7} // visual feedback
        >
          <Image source={{ uri: item.image }} style={styles.image} />
          <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
            {item.title}
          </Text>
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  box: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 10,
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    marginBottom: 5,
    borderRadius: 8,
  },
  title: {
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Categories;
