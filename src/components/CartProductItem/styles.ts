import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    page:{
        padding: 10,
        height: '100%'
    },
    root:{
        borderWidth: 1,
        borderColor: '#d1d1d1',
        borderRadius: 10,
        backgroundColor: '#fff',
        marginVertical: 5,
        padding: 5
    },
    row:{
        flexDirection: 'row'
    },
    rightContainer:{
        padding: 10,
        flex: 3,
    },
    image:{
        flex: 2,
        height: 150,
        resizeMode: 'contain',
    
    },
    title:{
        fontSize: 18,
    },
    price:{
        fontSize: 18,
        fontWeight: 'bold',
    },
    ratingsContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
    },
    star:{
        margin: 2,
    },
    oldPrice:{
        fontSize: 12,
        fontWeight: 'normal',
        textDecorationLine: 'line-through',
    },
    quantityContainer:{
        // marginVertical: 10,
        margin: 5,
    }

});
export default styles;