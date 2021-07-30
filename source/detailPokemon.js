import React, { useEffect } from 'react';
import {
    Text,
    View,
    Modal,
    Pressable,
    ActivityIndicator,
    Image,
    ScrollView
} from 'react-native'
import { styles } from './styles/modalStyles';
import { useSelector, useDispatch } from 'react-redux';
import { getPokemonById, clearPokemonById } from './redux/injector/pokemon';

const ModalDetailPokemon = (props) => {
    // console.log("ID", props.idPokemon);

    const dispatch = useDispatch();

    useEffect(() => {
        if (props.modalDetailPokemon === true) {
            dispatch(getPokemonById(props.url));
        }
    }, [props.modalDetailPokemon])

    const pokemonDetail = useSelector((state) => state.pokemon.pokemonDetail);

    const finishViewing = () => {
        props.setDetail(!props.modalDetailPokemon);
        dispatch(clearPokemonById());
    }

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={props.modalDetailPokemon}
            onRequestClose={() => {
                props.setDetail(!props.modalDetailPokemon);
            }}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    {pokemonDetail?.name == null ?
                        <ActivityIndicator color={'#989898'} size={'small'} />
                        :
                        <ScrollView contentContainerStyle={{ justifyContent: 'space-evenly', flex: 1, alignItems: 'center' }}>
                            <Image source={{ uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${props.idPokemon}.png` }}
                                style={{ width: 200, height: 200 }} />
                            <Text style={{ fontWeight: 'bold', fontSize: 17, textTransform: 'uppercase' }}>{pokemonDetail.name}</Text>
                            <Text>Statistics</Text>
                            {pokemonDetail.stats.map((stats, index) => {
                                return (
                                    <Text>{stats.stat.name} {stats.base_stat}</Text>
                                )
                            })
                            }
                            <Text>Type</Text>
                            {pokemonDetail.types.map((type, index) => {
                                return (
                                    <Text>{type.type.name}</Text>
                                )
                            })
                            }
                            <Text>Abilities</Text>
                            {pokemonDetail.abilities.map((skills, index) => {
                                return (
                                    <Text>{skills.ability.name}</Text>
                                )
                            })
                            }
                            <Text> Species: {pokemonDetail.species.name}</Text>
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

export default ModalDetailPokemon;