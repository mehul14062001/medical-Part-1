import React, { useEffect, useState, useContext } from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator, Alert } from 'react-native';
import { Card, FAB } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux'
import { context } from '../App'
import { ngrok } from '../ngrok'
const Home = ({ navigation, route }) => {

    const { state, dispatch } = useContext(context)
    const { data, loading } = state
    const fetchData = () => {
        fetch("https://4702-122-179-62-45.ngrok.io/")
            .then(res => res.json())
            .then(results => {
                dispatch({ type: "ADD_DATA", payload: results })
                dispatch({ type: "SET_LOADING", payload: false })
            })
            .catch(err => {
                Alert.alert("Something went wrong")
            })
    }

    useEffect(() => {
        fetchData()
    }, [])

    const renderList = ((item) => {
        return (
            <Card style={styles.mycard} key={item._id} onPress={() => navigation.navigate("Report", { item })}>
                <View style={styles.cardView}>
                    <View style={{ marginLeft: 10 }}>
                        <Text style={styles.text}>
                            {item.name}
                        </Text>
                    </View>
                </View>
            </Card>
        )
    });

    return (
        <View style={{ flex: 1 }}>
            {
                loading ?
                    <ActivityIndicator size="large" /> :
                    <FlatList
                        data={data}
                        renderItem={({ item }) => {
                            return renderList(item)
                        }}
                        keyExtractor={item => { item._id }}
                        onRefresh={() => fetchData()}
                        refreshing={loading}
                    />
            }

            <FAB
                onPress={() => navigation.navigate("AddPatient")}
                style={styles.fab}
                small
                icon="plus"
                theme={{ colors: { accent: "#006aff" } }}
            />
        </View>
    )


}

const styles = StyleSheet.create({
    mycard: {
        margin: 5,
        padding: 5,
        flexDirection: "row"
    },
    cardView: {
        flexDirection: "row",
        padding: 6,
    },
    text: {
        fontSize: 20,
        marginLeft: 10,
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    },
})

export default Home;