import React, {useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, FlatList} from 'react-native';

import NewsCard from '../components/NewsCard';
import newsAPI from '../apis/News';

const News = ({navigation}) => {

    const [news, setNews] = useState([]);

    useEffect(() => {
        getNewsFromAPI();
    }, [])

    // This a asynchronus call
    // const newsResponse = async() => {
    //     const response = await newsAPI.get('top-headlines?country=us&apiKey=386983d4722b404a930568104c34eb07');
    //     console.log(response.data)
    // }

    function getNewsFromAPI() {
        newsAPI.get('top-headlines?country=us&apiKey=386983d4722b404a930568104c34eb07')
        .then(response => {
            setNews(response.data);
        })
        .catch(err => {
            console.log(err);
        })
    }

    if (!news) {
        return null
    }

    return (
        <View>
            <FlatList data = {news.articles}
            keyExtractor = {(item, index) => 'key' + index}
            renderItem = {({item}) => {
                return <NewsCard item={item}/>
            }}
            />
        </View>
    );
}

export default News;