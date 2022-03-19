import { StyleSheet } from 'react-native';
import AppStyles from '../../config/styles';
import { h, w } from "../../config/dimensions";

const styles = StyleSheet.create({
    success_icon: {
        width: 17.3*w,
        height: 8*h,
        backgroundColor: "#F0F9F6",
        borderRadius: 12,
        borderColor: AppStyles.colors.success,
        borderWidth: 1,
    },
    header: {
        flexDirection: 'row',
        width: "100%",
        alignSelf: "flex-start",
        flex: 1
    },
    
    alert_icon: {
        width: 17.3*w,
        height: 8*h,
        borderRadius: 12,
        borderWidth: 1,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "flex-start"
    },
    alert_badge: {
        padding: "5%",
        height: 3*h,
        width: 17.3*w,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "flex-start",
        marginTop: "10%"
    },
    card: {
        width: "90%",
        borderRadius: 12,
        marginVertical: "5%",
        backgroundColor: "#E0F4F4"
        
    },
    cardView: {
        margin: "3%",
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: "stretch",
        flex: 1
    },
    nameView: {
        width: "100%",
        alignItems: 'center',
        padding: "4%",
        paddingTop: 16,
        flex: 1
    },
    title: {
        marginBottom: "3%",
        color: "#479797",
        fontWeight: "bold",
        fontSize: 15,
        textAlign: 'left'
    },
    datetime: {
        marginBottom: "3%",
        color: "#479797",
        fontSize: 13,
        textAlign: 'left',
        marginTop: "4%"
    },
    titleView: {
        flex: 1,
    },

    description: {
        color: "#479797",
        fontSize: 12,
        textAlign: 'left'
    },
    descriptionView: {
        marginTop: "3%",
        marginBottom: "3%",
        color: AppStyles.colors.grey,
        fontSize: 12,
        textAlign: 'left'
    },
    list: {
        justifyContent: 'center',
        alignItems: 'center'        
    },
    searchBar: {
        paddingHorizontal: "6%",
        alignSelf: "center",
        backgroundColor: "white",
        width: "100%",        
    }
});

export default styles;
