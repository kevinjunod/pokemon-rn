import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { styles } from '../styles/styles';
import { useSelector, useDispatch } from 'react-redux';
import { getItem, getNewItemList } from '../redux/injector/item';
import ModalDetailItem from './detailItem';

const Item = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getItem());
    }, [dispatch])

    const [modalDetailItem, setModalDetailItem] = useState(false);
    const [urlDetail, setUrlDetail] = useState("");


    const itemList = useSelector((state) => state.item.itemList);
    const nextUrl = useSelector((state) => state.pokemon.nextUrl)

    const setDetailItem = useCallback((visible) => {
        return setModalDetailItem(visible)
    }, [])

    const detailingItem = (url_detail) => {
        setModalDetailItem(true);
        setUrlDetail(url_detail);
    }

    const itemSeparator = () => {
        return (
            <View
                style={{
                    height: 2.5,
                    width: "100%",
                }}
            />
        );
    }

    return (
        <View style={styles.container}>
            <ModalDetailItem
                url={urlDetail}
                setDetail={setDetailItem}
                modalDetailItem={modalDetailItem}
            />
            <View style={styles.buttonStyle}>
                <Text style={{ fontSize: 21 }}>
                    List of Items
                </Text>
            </View>
            {itemList && nextUrl &&
                <FlatList
                    style={styles.contentStyle}
                    onEndReached={() => {
                        dispatch(getNewItemList(nextUrl))
                    }}
                    onEndReachedThreshold={.5}
                    contentContainerStyle={{ alignItems: 'center' }}
                    numColumns={3}
                    data={itemList}
                    ItemSeparatorComponent={itemSeparator}
                    renderItem={({ item }) => (
                        <View style={styles.cardContent}>
                            <TouchableOpacity onPress={() => detailingItem(item.url)}>
                                <Text style={styles.textCard}>{item.name}</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                    keyExtractor={item => item.name}
                />
            }
        </View>
    )
}

export default Item;