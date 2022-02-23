import React, {useState} from "react";
import {View, Text} from 'react-native';
import {Button, Input} from 'react-native-elements';
import {useData} from '../../hooks/data';
import { Container, ButtonContainer, FormContainer } from "./styles";
import {generateUniqueId} from '../../helpers';
import moment from 'moment';
import { useNavigation } from "@react-navigation/native";


const NewItem = () => {
    const {addItem} = useData();
    const navigation = useNavigation();
    const [name, setName] = useState('');
    const [kcal, setKcal] = useState('');

    const handleOnSave = () => {
        if(name && kcal){
            addItem({
                id: generateUniqueId(),
                name: name,
                kcal: Number(kcal),
                date: moment()
            })
            navigation.goBack();
        }
    };

    return(
        <Container>
            <FormContainer>
                <Input label="Nome" value={name} onChangeText={setName} placeholder="Descrição"/>
                <Input label="kcal" value={kcal} onChangeText={setKcal} placeholder="Somente números"/>
            </FormContainer>
            <ButtonContainer>
                <Button 
                    title="Salvar"
                    buttonStyle={{
                        backgroundColor:'#1A3BA1',
                    }}
                    onPress={handleOnSave}
                />
            </ButtonContainer>
        </Container>
    );
};

export default NewItem;