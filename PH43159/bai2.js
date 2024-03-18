import React, { useRef } from 'react';
import { StyleSheet, Text, View, FlatList, Animated } from 'react-native';

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

const Bai2 = () => {
  const scrollY = useRef(new Animated.Value(0)).current;

  const renderItem = ({ item, index }) => {
    const inputRange = [-1, 0, index * 50, (index + 1) * 70];

    const opacity = scrollY.interpolate({
      inputRange,
      outputRange: [-0, 1, 1, -0],
    });

    const scale = scrollY.interpolate({
      inputRange,
      outputRange: [-0.5, 1, 1, -0.5],
    });

    return (
      <Animated.View style={{ opacity, transform: [{ scale }] }}>
        <Text style={styles.item}>{item}</Text>
      </Animated.View>
    );
  };

  return (
    <View style={styles.container}>
      <AnimatedFlatList
        data={['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5','Item 6', 'Item 7', 'Item 8', 'Item 9', 'Item 5','Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5','Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5','Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5','Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5']}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    borderRadius:20,
    width:330,
    padding: 20,
    marginVertical: 2,
    backgroundColor: '#ccc',
  },
});

export default Bai2;