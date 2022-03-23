import { StyleSheet } from 'react-native';
import AppStyles from '../../config/styles';

const styles = StyleSheet.create({
    container: {
        width: "25%",
        height: "90%",
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1,
        marginTop: "2%"
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: "6%",
        paddingHorizontal: "5%",
        backgroundColor: "white",
        marginHorizontal: "5%",
        borderRadius: 10,
        marginVertical: "2%"
        //borderBottomWidth: StyleSheet.hairlineWidth
    },
    nameView: {
        flex: 1,
        paddingHorizontal: 8,
        justifyContent: 'center'
    },
    head: {
        fontSize: 16,
        color: AppStyles.colors.black,
        textAlign: 'left'
    },
    action: {
        color: AppStyles.colors.grey,
        paddingTop: 4,
        lineHeight: 25,
    },
    objectName: {
        color: "black",
        fontWeight: "bold",
    },
    actionsView: {
        marginTop: "5%",
        flexDirection: "row",
    },
    descriptionView: {
        flexDirection: 'row',
    },
    button: {
        marginRight: "5%",
        borderRadius: 10,
        paddingHorizontal: "5%",
        paddingVertical: "2%"
    },
    descriptionTextView: {
        width: "70%",
        marginRight: "10%"
    },
    objectIcon: {
        backgroundColor: "#F2F2F2",
        borderRadius: 10,
        alignItems: "flex-end",
        justifyContent: "center",
        alignSelf: "flex-start",
        padding: "5%",
    },
    timestamp: {
        color: AppStyles.colors.grey,
        marginLeft: "5%",
        fontSize: 14,
    },
    icon: {
        paddingHorizontal: 12,
        justifyContent: 'center',
        alignItems: 'center'
    },
    header: {
        fontSize: 14,
        fontWeight: 'bold',
        color: AppStyles.colors.grey,
        paddingVertical: 12,
        paddingHorizontal: 16
    },
    itemHeader: {
        flexDirection: "row"
    },
    groupView: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12
    },
    searchBar: {
        marginTop: "3%",
        marginHorizontal: "5%",
        backgroundColor: "transparent"
    }
});

export default styles;
