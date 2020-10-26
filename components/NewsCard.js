import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';

const {width, height} = Dimensions.get('window');

const NewsCard = ({item}) => {
    return (
        <View style={styles.card}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.author}>{item.author}</Text>
            <Image style={styles.image} source={{uri: item.urlToImage}}/>
            <Text style={styles.description}>{item.description}</Text>
        </View>
       
    );
}

const styles = StyleSheet.create({
    card: {
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 2 },
        elevation: 8,
        shadowRadius: 6,
        shadowOpacity: 0.10,
        backgroundColor: 'white',
        margin: 10,
        borderRadius: 10
    },
    title: {
        marginHorizontal: width * 0.05,
        marginVertical:width * 0.03,
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold'
    },
    description: {
        marginVertical: width * 0.05,
        marginHorizontal: width * 0.02,
        color: 'gray',
        fontSize: 18
    },
    image: {
        height: height / 6,
        marginLeft: width * 0.05,
        marginRight: width * 0.05,
        marginVertical: height * 0.02
    },
    author: {
        marginBottom: width * 0.05,
        marginHorizontal: width * 0.05,
        fontSize: 15,
        color: 'gray'
    },
});

export default NewsCard;