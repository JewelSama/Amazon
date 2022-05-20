import { FlatList, StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React from 'react'


const ImageCarousel = ({images}: {images: [string]}) => {
    const width = Dimensions.get("window").width;
  return (
    <View style={styles.root}>
        <FlatList 
            data={images}
            renderItem={({item}) => (
                <Image style={[styles.image, {width: width - 40}]} source={{uri: item}} />
            )}
            horizontal
            showsHorizontalScrollIndicator= {false}
            snapToInterval={width - 20}
            snapToAlignment={'center'}
            decelerationRate={'fast'}
        />
    </View>
  )
}


const styles = StyleSheet.create({
    root:{

    },
    image:{
        margin: 10,
        height: 250,
        resizeMode: 'contain'
    }
});

export default ImageCarousel;
