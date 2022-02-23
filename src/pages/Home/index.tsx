import React from 'react';
import CalendarStrip from 'react-native-calendar-strip';
import moment from 'moment';
import {FlatList, Text} from 'react-native'
import {useNavigation} from '@react-navigation/native';
import { Container, HeaderContainer, HeaderContainerHighlight, HeaderTextCounterHighlight, HeaderTextHighlight, HeaderTitle, BodyContainer } from './styles';
import ItemList from '../../components/ItemList';
import { FAB } from 'react-native-elements/dist/buttons/FAB';
import {Feather} from '@expo/vector-icons';
import {useData} from '../../hooks/data';


const Home: React.FC = () => {

  const navigation = useNavigation();
  const {handleChangeDate, currentList, currentKcal} = useData();
  

  const handleOneNewItem = ():void => {
    navigation.navigate("NewItem");
  }


  return (
      <Container>
          <HeaderContainer>
            <CalendarStrip 
              daySelectionAnimation={{
                type: "border",
                duration: 200,
                borderWidth: 1,
                borderHighlightColor: "white",
              }}
              style={{height: 100, paddingTop: 20, paddingBottom: 5}}
              calendarHeaderStyle={{color: "white", marginBottom: 15}}
              dateNumberStyle={{color:"white"}}
              dateNameStyle={{color: "white"}}
              scrollable={true}
              highlightDateNumberStyle={{color:"#9acd32"}}
              highlightDateNameStyle={{color:"#9acd32"}}
              disabledDateNameStyle={{color: "gray"}}
              disabledDateNumberStyle={{color:"gray"}}
              iconContainer={{flex: 0.1}}
              onDateSelected={handleChangeDate}
              startingDate={moment().subtract(3, "days")}
              selectedDate={moment()}
              scrollerPaging={true}
              iconLeft={require("../../assets/img/arrow-left.png")}
              iconRight={require("../../assets/img/arrow-right.png")}
            />
            <HeaderTitle>Consumido no dia</HeaderTitle>
            <HeaderContainerHighlight>
              <HeaderTextCounterHighlight>
                {currentKcal}
              </HeaderTextCounterHighlight>
              <HeaderTextHighlight> /kcal</HeaderTextHighlight>
            </HeaderContainerHighlight>
          </HeaderContainer>
          <BodyContainer>
            <FlatList 
              data={currentList}
              keyExtractor={item => item.id}
              renderItem={({item}) => <ItemList item={item}/>}
            />
            <FAB 
              icon={<Feather name='plus' size={24} color='white'/>}
              visible={true}
              placement="right"
              color='#1E3BA1'
              style={{marginRight: 20, right: 20, bottom: 20}}
              onPress={handleOneNewItem}
            />
          </BodyContainer>
      </Container>
  );
}

export default Home;