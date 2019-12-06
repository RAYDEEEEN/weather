import { StyleSheet } from 'react-native';
export const Style =  StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  Clear: {backgroundColor: 'blue'},
  Sunny: {backgroundColor: 'yellow'},
  Drizzle: {backgroundColor: 'grey'},
  Clouds: {backgroundColor: 'lightgrey'},
  items: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginBottom: 10
  }
})