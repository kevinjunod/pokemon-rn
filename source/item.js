import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { styles } from './styles/styles';
import { useSelector, useDispatch } from 'react-redux';
import { getItem } from './redux/injector/item';
import ModalDetailItem from './detailItem';

const Item = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getItem());
    }, [dispatch])

    const [modalDetailItem, setModalDetailItem] = useState(false);
    const [urlDetail, setUrlDetail] = useState("");

    const itemList = useSelector((state) => state.item.itemList);

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
            {itemList &&
                <FlatList
                    data={itemList}
                    ItemSeparatorComponent={itemSeparator}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => detailingItem(item.url)}>
                            <Text style={{ color: '#000' }}>{item.name}</Text>
                        </TouchableOpacity>
                    )}
                    keyExtractor={item => item.name}
                />
            }
        </View>
    )
}

export default Item;