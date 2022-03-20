import React, {Component} from 'react';
import {Alert, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Agenda, DateData, AgendaEntry, AgendaSchedule} from 'react-native-calendars';
import AppStyles from '../../config/styles';
import ListItemInvite from "./Invites/ListItemInvite"
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Modal from '../../components/modal/Modal';
import NewEvent from './NewEvent';


const testIDs = {
  menu: {
    CONTAINER: 'menu',
    CALENDARS: 'calendars_btn',
    CALENDAR_LIST: 'calendar_list_btn',
    HORIZONTAL_LIST: 'horizontal_list_btn',
    AGENDA: 'agenda_btn',
    EXPANDABLE_CALENDAR: 'expandable_calendar_btn',
    WEEK_CALENDAR: 'week_calendar_btn',
    TIMELINE_CALENDAR: 'timeline_calendar_btn'
  },
  calendars: {
    CONTAINER: 'calendars',
    FIRST: 'first_calendar',
    LAST: 'last_calendar'
  },
  calendarList: {CONTAINER: 'calendarList'},
  horizontalList: {CONTAINER: 'horizontalList'},
  agenda: {
    CONTAINER: 'agenda',
    ITEM: 'item'
  },
  expandableCalendar: {CONTAINER: 'expandableCalendar'},
  weekCalendar: {CONTAINER: 'weekCalendar'}
};


interface State {
  items?: AgendaSchedule;
  navigation: any;
}

export default class AgendaScreen extends Component<State> {


  constructor(props: any) {
    super(props)
  }

  componentDidMount() {
    this.props.navigation.setOptions({
      headerRight: () => <TouchableOpacity onPress={this.toggleNewEventModal}><FontAwesome name="calendar-plus-o"  size={23} style={{right: "70%"}}/></TouchableOpacity>
  });
  }


  state: any = {
    items: undefined,
    newEventModal: false,
  };



  render() {
    return (
    <View style={{flex:1}}>
        <Agenda
        testID={testIDs.agenda.CONTAINER}
        items={this.state.items}
        loadItemsForMonth={this.loadItems}
        selected={'2017-05-16'}
        renderItem={this.renderItem}
        renderEmptyDate={this.renderEmptyDate}
        rowHasChanged={this.rowHasChanged}
        showClosingKnob={true}
        // markingType={'period'}
        // markedDates={{
        //    '2017-05-08': {textColor: '#43515c'},
        //    '2017-05-09': {textColor: '#43515c'},
        //    '2017-05-14': {startingDay: true, endingDay: true, color: 'blue'},
        //    '2017-05-21': {startingDay: true, color: 'blue'},
        //    '2017-05-22': {endingDay: true, color: 'gray'},
        //    '2017-05-24': {startingDay: true, color: 'gray'},
        //    '2017-05-25': {color: 'gray'},
        //    '2017-05-26': {endingDay: true, color: 'gray'}}}
        // monthFormat={'yyyy'}
        theme={{
          calendarBackground: 'white', 
          agendaKnobColor: 'lightgray', 
          textSectionTitleColor: 'black',
          selectedDayBackgroundColor: "#DAF6F4",
          selectedDayTextColor: '#2d4150',
          selectedDotColor: '#2d4150',
          dotColor: AppStyles.colors.darkBleu,
          //textDayFontWeight: '600',
          //textMonthFontWeight: '600',
          //textDayHeaderFontWeight: '600',
          agendaDayTextColor: "black",
          agendaDayNumColor: "black",
          monthTextColor: AppStyles.colors.darkBleu,
          /* agenda style */
        }}
        
        // hideExtraDays={false}
        // showOnlySelectedDayItems
      />
      <Modal title="🗓️ NEW EVENT" visibility={this.state.newEventModal} setVisibility={this.toggleNewEventModal}>
        <NewEvent/>  
      </Modal>
      </View>
    );
  }

  loadItems = (day: DateData) => {
    const items = this.state.items || {};

    setTimeout(() => {
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = this.timeToString(time);

        if (!items[strTime]) {
          items[strTime] = [];
          
          const numItems = Math.floor(Math.random() * 3 + 1);
          for (let j = 0; j < numItems; j++) {
            items[strTime].push({
              name: 'Item for ' + strTime + ' #' + j,
              height: Math.max(50, Math.floor(Math.random() * 150)),
              day: strTime
            });
          }
        }
      }
      
      const newItems: AgendaSchedule = {};
      Object.keys(items).forEach(key => {
        newItems[key] = items[key];
      });
      this.setState({
        items: newItems
      });
    }, 1000);
  }

  renderItem = (reservation: AgendaEntry, isFirst: boolean) => {
    const colors = ["#CFECFF", "#FEE1DD", "#DAF6F4"];

    return (
      <ListItemInvite
       testID={testIDs.agenda.ITEM}
        style={[styles.item, {height: reservation.height}]}
        backgroundColor={colors[Math.floor(Math.random() * colors.length)]}
        onPress={() => Alert.alert(reservation.name)}
        />
    );
  }

  renderEmptyDate = () => {
    return (
      <View style={styles.emptyDate}>
        <Text style={{color: "gray"}}>no events</Text>
      </View>
    );
  }

  rowHasChanged = (r1: AgendaEntry, r2: AgendaEntry) => {
    return r1.name !== r2.name;
  }

  timeToString(time: number) {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  }


  toggleNewEventModal = () => {
    console.log(this.state.newEventModal)
    this.setState({newEventModal: !this.state.newEventModal});
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17
  },
  emptyDate: {
    height: 15,
    flex: 1,
    paddingTop: 30
  }
});