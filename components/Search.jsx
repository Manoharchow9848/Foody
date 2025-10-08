import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';

const Search = () => {
  return (
    <View style={styles.container}>
      {/* Search Icon + Input */}
      <Ionicons name="search-outline" size={20} color="gray" style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder="Search here"
        placeholderTextColor="gray"
      />

      {/* Vertical Divider */}
      <View style={styles.divider} />

      {/* Filter Icon */}
      <TouchableOpacity style={styles.filterButton}>
        <Ionicons name="options-outline" size={24} color="#000" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginHorizontal: 15,
    marginVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 8,
    elevation: 2, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  divider: {
    width: 1,
    height: '60%',
    backgroundColor: '#ccc',
    marginHorizontal: 10,
  },
  filterButton: {
    paddingHorizontal: 5,
  },
});

export default Search;
