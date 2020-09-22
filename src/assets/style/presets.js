import {StyleSheet} from 'react-native';
import {Colors} from '.';
import spacing from './spacing';

module.exports = StyleSheet.create({
  fullScreen: {
    height: '100%',
  },
  spaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  relative: {
    position: 'relative',
  },
  absolute: {
    position: 'absolute',
  },
  textFieldContainer: {
    borderRadius: 10,
    elevation: 2,
    backgroundColor: Colors.white,
  },
  spcsContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingTop: 10,
    paddingBottom: 10,
  },
  textField: {
    paddingLeft: 10,
    paddingRight: 10,
    height: 50,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingBottom: 15,
  },
  secion: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 15,
    paddingBottom: 50,
  },
  bordered: {
    borderRadius: 30,
    overflow: 'hidden',
  },
  sectionTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    paddingBottom: 5,
  },
  flexStart: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  pb5: {
    paddingBottom: 5,
  },
  ph5: {
    paddingLeft: 5,
    paddingRight: 5,
  },
  ph15: {
    paddingLeft: 15,
    paddingRight: 15,
  },
  colorWhite: {
    color: Colors.white,
  },
  houseRent: {
    position: 'absolute',
    top: 15,
    left: 15,
    backgroundColor: Colors.claret,
    paddingRight: spacing.medium,
    paddingLeft: spacing.medium,
    paddingTop: 2,
    paddingBottom: 2,
    borderRadius: 5,
    color: Colors.white,
    fontWeight: 'bold',
  },
  searchItem: {
    height: 150,
    borderRadius: 15,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
    marginRight: 5,
  },
  searchItemTextContainer: {
    position: 'absolute',
    backgroundColor: '#00000056',
    height: '100%',
    width: '100%',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchItemText: {
    color: Colors.white,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  listItemBody: {
    backgroundColor: Colors.white,
    padding: 15,
  },
  colorBlack: {
    color: Colors.black,
  },
  colorSilver: {
    color: Colors.silver,
  },
  colorClaret: {
    color: Colors.claret,
  },
  sectionActions: {
    marginTop: 15,
    paddingTop: 5,
    borderTopColor: Colors.silver,
    borderTopWidth: 1,
  },
  sectionActionsText: {
    color: Colors.claret,
    fontWeight: 'bold',
  },
  listingItem: {
    marginBottom: 15,
    borderRadius: 15,
    overflow: 'hidden',
    elevation: 2,
  },
  homeHeartContainer: {
    position: 'absolute',
    bottom: -20,
    right: 10,
    zIndex: 10,
    backgroundColor: Colors.white,
    height: 40,
    width: 40,
    borderRadius: 25,
    borderColor: Colors.silver,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionBody: {
    position: 'absolute',
    bottom: 15,
    width: '100%',
    padding: 10,
  },
  colorLime: {
    color: Colors.claret,
  },
  container: {
    padding: 15,
  },
  fontSize18: {
    fontSize: 18,
  },
  fontSize20: {
    fontSize: 20,
  },
  bold: {
    fontWeight: 'bold',
  },
  houseNumbersContainer: {
    borderColor: Colors.lightGray,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    padding: 15,
  },
  verticalCenter: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  propertyItemContainer: {
    paddingTop: 10,
  },
  checkIcon: {
    borderWidth: 1,
    borderColor: Colors.claret,
    borderRadius: 25,
    height: 25,
    width: 25,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  alignCenter: {
    alignItems: 'center',
  },
  propertyItem: {
    marginTop: 5,
    marginBottom: 5,
  },
  back: {
    position: 'absolute',
    top: 15,
    zIndex: 10,
    left: 15,
  },
  positionRelative: {
    position: 'relative',
  },
  btn: {
    borderRadius: 15,
  },
  btnText: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 15,
    paddingBottom: 15,
    textAlign: 'center',
    width: '100%',
  },
  primaryBtn: {
    backgroundColor: Colors.claret,
  },
  menuHeader: {
    fontSize: 30,
    color: Colors.claret,
    fontWeight: 'bold',
    paddingTop: 40,
    paddingBottom: 15,
    textAlign: 'center',
    elevation: 1,
  },
  menuItem: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 25,
    paddingBottom: 25,
    borderBottomColor: Colors.lightGray,
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuItemText: {
    color: Colors.silver,
    paddingLeft: 15,
    paddingRight: 15,
    fontSize: 16,
  },
  menuContainer: {
    height: '100%',
  },
  squareNumber: {
    position: 'absolute',
    top: -3,
    right: -6,
    fontSize: 10,
  },
  ripeTitle: {
    fontSize: 20,
    color: Colors.claret,
    fontWeight: 'bold',
  },
  contactButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.claret,
  },
  sectionBody: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: 10,
  },
  borderRadius15: {
    borderRadius: 15,
    overflow: 'hidden',
  },
  fieldMargin: {
    marginTop: 15,
  },
  upperCase: {
    textTransform: 'uppercase',
  },
  centered: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    color: Colors.claret,
  },
  homeTitle: {
    fontSize: 20,
    color: Colors.black,
    paddingBottom: 10,
  },
  ImageUploadFieldContainer: {
    justifyContent: 'center',
    height: 50,
    borderRadius: 10,
    borderColor: Colors.claret,
    borderWidth: 1,
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 10,
  },
  ImageUploadField: {
    backgroundColor: Colors.white,
    color: Colors.claret,
  },
  trashTopIcon: {
    backgroundColor: 'white',
    height: 30,
    width: 30,
    borderRadius: 25,
    borderColor: 'red',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  socailicon: {
    alignItems:"center",
    width:"100%",
    padding:20
  },
  socailicons: {
    flexDirection:'row',
    width:"100%",
    alignItems:"center",
    paddingRight:"10%",
    paddingLeft:"10%",
    paddingTop:"15%" ,
  },
  Connecticon: {
    alignItems:"center",
    width:"100%",
    margin:30
  },
  Connecticons: {
    flexDirection:'row',
    width:"100%",
    alignItems:"center",
    paddingRight:"10%",
    paddingLeft:"10%",
  },
});
