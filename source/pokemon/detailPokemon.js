import React, { useEffect } from 'react';
import {
    Text,
    View,
    Modal,
    Pressable,
    ActivityIndicator,
    Image,
    ScrollView,
} from 'react-native';
import { styles } from '../styles/modalStyles';
import {
    useSelector,
    useDispatch
} from 'react-redux';
import {
    getPokemonById,
    clearPokemonById
} from '../redux/injector/pokemon';

const ModalDetailPokemon = (props) => {
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

    const typeColor = (value) => {
        if (value == 'normal') return '#DEDEDE'
        else if (value == 'fighting') return '#FFA77F'
        else if (value == 'flying') return '#D4F1F9'
        else if (value == 'poison') return '#B19CD9'
        else if (value == 'ground') return '#F6E2D7'
        else if (value == 'rock') return '#969696'
        else if (value == 'bug') return '#B0DEA3'
        else if (value == 'ghost') return '#F8F8FF'
        else if (value == 'steel') return '#CACCCE'
        else if (value == 'fire') return '#FC8A17'
        else if (value == 'water') return '#80C5DE'
        else if (value == 'grass') return '#7EC850'
        else if (value == 'electric') return '#FFFF33'
        else if (value == 'psychic') return '#7BD8F1'
        else if (value == 'ice') return '#80C5DE'
        else if (value == 'dragon') return '#F35D8B'
        else if (value == 'dark') return '#B0B3B8'
        else if (value == 'fairy') return '#F2C1D1'
        else if (value == 'unknown') return '#FF6961'
        else if (value == 'shadow') return '#A3AAAF'
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
                        <ActivityIndicator color={'#989898'} size={'large'} />
                        :
                        <ScrollView
                            contentContainerStyle={styles.contentContainerStyle}
                            style={{ height: '100%' }}
                        >
                            <Image
                                source={{
                                    uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${props.idPokemon}.png`
                                }}
                                style={styles.imageSize} />
                            <View style={styles.cardTitle}>
                                <Text style={styles.contentTitle}>{pokemonDetail.name}</Text>
                            </View>
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'flex-start',
                            }}>
                                {pokemonDetail.types.map((type, index) => {
                                    let element = type.type.name;
                                    return (
                                        <View style={{
                                            borderWidth: 1,
                                            paddingHorizontal: 10,
                                            margin: 3,
                                            borderRadius: 20,
                                            borderColor: typeColor(element),
                                            backgroundColor: typeColor(element),
                                        }}>
                                            <Text style={styles.pokemonTypeStyle}>{element}</Text>
                                        </View>
                                    )
                                })
                                }
                            </View>
                            <View style={styles.contentStyle}>
                                <Text style={styles.contentTitleStyle}>Statistics</Text>
                                {pokemonDetail.stats.map((stats, index) => {
                                    return (
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
                                            <Text style={{ color: '#3A3B3C' }}>{stats.stat.name}</Text>
                                            <Text style={{ fontWeight: '700', color: '#3A3B3C' }}>{stats.base_stat}</Text>
                                        </View>
                                    )
                                })
                                }
                            </View>
                            <View style={styles.contentStyle}>
                                <Text style={styles.contentTitleStyle}>Abilities</Text>
                                {pokemonDetail.abilities.map((skills, index) => {
                                    return (
                                        <Text style={{ color: '#3A3B3C' }}>- {skills.ability.name}</Text>
                                    )
                                })
                                }
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

export default ModalDetailPokemon;