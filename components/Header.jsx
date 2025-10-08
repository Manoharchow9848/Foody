// Header.jsx
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { Platform, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Header = () => {
  return (
    <View style={styles.safeArea}>
      <View style={styles.container}>
      
        <View style={styles.left}>
          <TouchableOpacity style={styles.avatar}>
  <View style={styles.avatarBox}>
    {/* You can replace the Image source with your own */}
    <Image
      source={{ uri: 'https://static.vecteezy.com/system/resources/thumbnails/027/951/137/small_2x/stylish-spectacles-guy-3d-avatar-character-illustrations-png.png' }} 
      style={styles.avatarImage}
    />
  </View>
</TouchableOpacity>

          <View style={styles.addressContainer}>
            <Text style={styles.deliverText}>Deliver to</Text>
            <View style={styles.locationRow}>
              <Ionicons name="location-sharp" size={16} color="gray" />
              <Text style={styles.locationText}>My Home</Text>
              <MaterialIcons name="keyboard-arrow-down" size={20} color="gray" />
            </View>
          </View>
        </View>

       
        <View style={styles.right}>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="notifications-outline" size={28}  color="#000" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="cart-outline" size={28} color="#000" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0, // ensure Android safe padding
  },
  avatarBox: {
  width: 40,
  height: 40,
  borderRadius: 8,        // rounded corners
  backgroundColor: '#FFD700', // yellow background
  justifyContent: 'center',
  alignItems: 'center',
  overflow: 'hidden',     // ensures image respects borderRadius
},
avatarImage: {
  width: '100%',
  height: '100%',
  resizeMode: 'cover',    // fill box
},

  container: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 10,
  },
  addressContainer: {
    justifyContent: 'center',
  },
  deliverText: {
    fontSize: 12,
    color: 'gray',
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    fontSize: 16,
    marginHorizontal: 4,
    fontWeight: 'bold',
  },
  right: {
    flexDirection: 'row',
  },
  iconButton: {
    marginLeft: 15,
  },
});

export default Header;
