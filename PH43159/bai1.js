import { Animated, Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'

const Bai1 = () => {

    const [Move, setMove] = useState(false);

    const position = useRef(new Animated.ValueXY()).current  // lay vi tri hien tai
    const windowHeigth = Dimensions.get('window').height // lay chieu cao

    useEffect(() => {
        startAnimation();
    }, []);

    const startAnimation = () => {
        const randomY = Math.floor(Math.random() * windowHeigth) // lay vi tri random
        Animated.timing(position, {
            toValue: { x: 0, y: randomY },
            duration: 3000, // thoi gian di chuyen
            useNativeDriver: false
        }).start(() => startAnimation()); // lap di lap lai
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => { setMove(!Move) }}
                style={[styles.btn, { backgroundColor: Move ? 'black' : 'blue' }]}>
                {Move
                    ? <Text style={{ color: 'white', fontSize: 16 }}>Stop</Text>
                    : <Text style={{ color: 'white', fontSize: 16 }}>Move</Text>}
            </TouchableOpacity>

            {Move
                ? <Animated.View style={[styles.box, position.getLayout()]} />
                : <Animated.View style={[styles.box]} />}
        </View>
    )
}

export default Bai1

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    box: {
        padding: 30,
        borderRadius: 5,
        backgroundColor: 'red'
    },
    btn: {
        padding: 10,
        marginVertical: 12,
        borderRadius: 13,
        width: 65,
        alignItems: 'center',
        justifyContent: 'center'
    }
})