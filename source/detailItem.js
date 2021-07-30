import React, { useEffect } from 'react';
import {
    Text,
    View,
    Modal,
    Pressable,
    ActivityIndicator,
} from 'react-native'
import { styles } from './styles/modalStyles';
import { useSelector, useDispatch } from 'react-redux';
import { getItemById, clearItemById } from './redux/injector/item';

const ModalDetailItem = (props) => {
    const dispatch = useDispatch();

    useEffect(() => {
        if (props.modalDetailItem === true) {
            dispatch(getItemById(props.url));
        }
    }, [props.modalDetailItem])

    const itemDetail = useSelector((state) => state.item.itemDetail);
    // console.log({ itemDetail });

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
                    <Text>
                        {itemDetail?.name == null ?
                            <ActivityIndicator color={'#989898'} size={'small'} />
                            :
                            itemDetail.name}
                    </Text>
                    <View style={styles.cardButton}>
                        <View style={{ width: 25 }} />
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => finishViewing()}
                        >
                            <Text style={styles.textStyle}>Done</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default ModalDetailItem;