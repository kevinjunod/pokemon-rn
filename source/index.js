import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { getPokemon, getPokemonById } from './redux/injector/pokemon';
import { getItem, getItemById } from './redux/injector/item';

const Index = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPokemon());
    }, [dispatch])

    const pokemonList = useSelector((state) => state.pokemon.pokemonList);
    // console.log(pokemonList);

    // const getPokemonHandler = () => {
    //     dispatch(getPokemon());
    // }
    // const getPokemonByIdHandler = () => {
    //     dispatch(getPokemonById());
    // }
    // const getItemHandler = () => {
    //     dispatch(getItem());
    // }
    // const getItemByIdHandler = () => {
    //     dispatch(getItemById());
    // }

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>{pokemonList}</Text>
            {/* <TouchableOpacity onPress={getPokemonHandler}>
                <Text>1</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={getPokemonByIdHandler}>
                <Text>2</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={getItemHandler}>
                <Text>3</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={getItemByIdHandler}>
                <Text>4</Text>
            </TouchableOpacity> */}
        </View>
    )
}

export default Index;