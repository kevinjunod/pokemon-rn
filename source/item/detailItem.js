import React, { useEffect } from 'react';
import {
    Text,
    View,
    Modal,
    Pressable,
    ActivityIndicator,
    ScrollView,
} from 'react-native'
import { styles } from '../styles/modalStyles';
import {
    useSelector,
    useDispatch
} from 'react-redux';
import {
    getItemById,
    clearItemById
} from '../redux/injector/item';

const ModalDetailItem = (props) => {
    const dispatch = useDispatch();

    useEffect(() => {
        if (props.modalDetailItem === true) {
            dispatch(getItemById(props.url));
        }
    }, [props.modalDetailItem])

    const itemDetail = useSelector((state) => state.item.itemDetail);

    const finishViewing = () => {
        props.setDetail(!props.modalDetailItem);
        dispatch(clearItemById());
    }

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={props.modalDetailItem}
            onRequestClose={() => {
                props.setDetail(!props.modalDetailItem);
            }}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    {itemDetail?.name == null ?
                        <ActivityIndicator color={'#989898'} size={'large'} />
                        :
                        <ScrollView contentContainerStyle={styles.contentContainerStyle}>
                            <View style={styles.cardTitle}>
                                <Text style={styles.contentTitle}>{itemDetail.name}</Text>
                            </View>
                            <View style={styles.contentStyle}>
                                <Text style={styles.contentTitleStyle}>Attributes</Text>
                                {itemDetail.attributes.map((atts, index) => {
                                    return (
                                        <Text>- {atts.name}</Text>
                                    )
                                })
                                }
                            </View>
                            <View style={styles.contentStyle}>
                                <Text style={styles.contentTitleStyle}>Category</Text>
                                <Text>{itemDetail.category.name}</Text>
                            </View>
                            <View style={styles.contentStyle}>
                                <Text style={styles.contentTitleStyle}>Description</Text>
                                <Text>{itemDetail.effect_entries[0].effect}</Text>
                            </View>
                            <View style={styles.cardButton}>
                                <View style={{ width: 25 }} />
                                <Pressable
                                    style={[styles.button, styles.buttonClose]}
                                    onPress={() => finishViewing()}
                                >
                                    <Text style={styles.textStyle}>Done</Text>
                                </Pressable>
                            </View>
                        </ScrollView>
                    }
                </View>
            </View>
        </Modal>
    )
}

export default ModalDetailItem;