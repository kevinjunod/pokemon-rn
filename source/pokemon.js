import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { styles } from './styles/styles';
import { useSelector, useDispatch } from 'react-redux';
import { getPokemon, getNewPokemonList } from './redux/injector/pokemon';
import ModalDetailPokemon from './detailPokemon';

const Pokemon = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPokemon());
    }, [dispatch])

    const [modalDetailPokemon, setModalDetailPokemon] = useState(false);
    const [urlDetail, setUrlDetail] = useState('');
    const [idPokemon, setIdPokemon] = useState('');

    const pokemonList = useSelector((state) => state.pokemon.pokemonList);
    const nextUrl = useSelector((state) => state.pokemon.nextUrl)
    console.log({ pokemonList });

    const setDetailPokemon = useCallback((visible) => {
        return setModalDetailPokemon(visible)
    }, [])

    const detailingPokemon = (url_detail) => {
        let temp = url_detail.substring(34);
        let id = temp.slice(0, -1)
        setModalDetailPokemon(true);
        setUrlDetail(url_detail);
        setIdPokemon(id);
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
            <ModalDetailPokemon
                url={urlDetail}
                setDetail={setDetailPokemon}
                modalDetailPokemon={modalDetailPokemon}
                idPokemon={idPokemon}
            />
            <View style={styles.buttonStyle}>
                <Text style={{ fontSize: 21 }}>
                    List of Pokemons
                </Text>
            </View>
            {pokemonList && nextUrl &&
                <FlatList
                    style={{ flexWrap: 'wrap', flexDirection: 'column' }}
                    onEndReached={() => {
                        dispatch(getNewPokemonList(nextUrl))
                        console.log("TAMBAH")
                    }}
                    // onEndReached={() => { console.log("TAMBAAAAHHHH") }}
                    onEndReachedThreshold={.5}
                    contentContainerStyle={{ alignItems: 'flex-start' }}
                    numColumns={3}
                    data={pokemonList}
                    ItemSeparatorComponent={itemSeparator}
                    renderItem={({ item }) => (
                        <View style={{ padding: 10, borderWidth: 1, backgroundColor: '#eccd05', borderRadius: 10, borderColor: '#d2b55b', alignItems: 'center', marginHorizontal: 5, marginVertical: 5 }}>
                            <TouchableOpacity onPress={() => detailingPokemon(item.url)}>
                                <Text style={{ letterSpacing: .5, fontSize: 17 }}>{item.name}</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                    keyExtractor={item => item.name}
                />
            }
        </View>
    )
}

export default Pokemon;