import { StyleSheet } from 'react-native';
import AppStyles from '../../config/styles';
import Metrics from '../../config/metrics';

const styles = StyleSheet.create({
    card: {
        width: Metrics.screenWidth / 2.5,
        height: Metrics.screenHeight / 3.6,
        margin: "2%",
        marginTop: "15%",
        borderRadius: 8,
    },
    cardView: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    footer: {
        width: "80%",
        paddingVertical: "15%",
        alignItems: 'center',
        borderTopWidth: StyleSheet.hairlineWidth,
        borderTopColor: AppStyles.colors.separator
    },
    actions: {
        width: "100%",
        paddingVertical: "15%",
        borderTopWidth: StyleSheet.hairlineWidth,
        borderTopColor: AppStyles.colors.separator,
        flexDirection: 'row',
        justifyContent: "space-evenly",
        alignItems: "center",
    },
    delete: {
        flexDirection: 'row',
    },
    edit: {
        flexDirection: 'row',
    },
    nameView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "center",
        padding: 8,
        paddingTop: 16
    },
    nameText: {
        marginTop: 8,
        color: AppStyles.colors.black,
        fontSize: 15,
        textAlign: 'center'
    },
    last: {
        marginTop: 4,
        color: AppStyles.colors.grey,
        fontSize: 12,
        textAlign: 'center'
    },
    members: {
        color: AppStyles.colors.grey,
        fontSize: 12,
        textAlign: 'center'
    },
    list: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default styles;
