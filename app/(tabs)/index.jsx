import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Categories from '../../components/Categories';
import Header from '../../components/Header';
import HorizontalScroll from '../../components/HorizontalScroll';
import Search from '../../components/Search';
import TrendingSection from '../../components/TrendingSection';

const Home = () => {
  const handlePowerPress = () => {
    console.log('Power button pressed');
    // You can add logout or any action here
  };

  return (
    <View style={styles.safeArea}>
      {/* Header Section */}
      <Header />
      {/* Search Section*/}
      <Search />
      {/* Horizontal Scroll */}
      <View style={styles.scroll}>
        <HorizontalScroll />
      </View>
      {/* Categories */}
      <Categories />
      {/* Trending Section */}
      <View style={styles.trending}>
        <TrendingSection />
      </View>

      {/* Floating Order Timer */}
      <View style={styles.orderTimer}>
        <Ionicons name="time-outline" size={20} color="#fff" style={{ marginRight: 5 }} />
        <Text style={styles.orderText}>
          Do order in <Text style={styles.timeText}>01:00:00</Text> and get order today
        </Text>
      </View>

      {/* Floating Lightning Button */}
      <TouchableOpacity style={styles.powerButton} onPress={handlePowerPress}>
        <Ionicons name="flash" size={28} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scroll: {
    marginLeft: 10,
    backgroundColor: '#e2ddddff',
  },
  trending: {
    backgroundColor: '#939090ff',
  },
  powerButton: {
    position: 'absolute',
    bottom: 45,
    right: 15,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#FFD700',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  orderTimer: {
    position: 'absolute',
    bottom: 20, // slightly above the floating button
    right: 30,
    backgroundColor: '#000000aa', // semi-transparent black
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  orderText: {
    color: '#fff',
    fontSize: 14,
  },
  timeText: {
    color: 'red',
    fontWeight: 'bold',
  },
});

export default Home;
