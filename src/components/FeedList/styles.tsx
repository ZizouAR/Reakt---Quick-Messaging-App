import { StyleSheet } from 'react-native';
import AppStyles from '../../config/styles';
import Metrics from '../../config/metrics';

const styles = StyleSheet.create({
    card: {
        width: "100%",
        height: Metrics.screenHeight / 3.6,
        margin: 10,
        alignSelf: "stretch",
        borderRadius: 15,
    },
    cardView: {
        width: Metrics.screenWidth / 1.15,
        height: Metrics.screenHeight / 3.6,
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: "stretch"
    },
    footer: {
        width: Metrics.screenWidth / 1.5,
        paddingVertical: 22,
        alignItems: "flex-start",
        borderTopWidth: StyleSheet.hairlineWidth,
        borderTopColor: AppStyles.colors.separator
    },
    nameView: {
        alignItems: 'center',
        padding: 8,
        paddingTop: 16
    },
    nameText: {
        marginTop: 8,
        marginBottom: "3%",
        color: AppStyles.colors.black,
        fontWeight: "bold",
        fontSize: 15,
        textAlign: 'left'
    },
    last: {
        marginTop: 4,
        color: AppStyles.colors.grey,
        fontSize: 12,
        textAlign: 'center'
    },
    description: {
        marginTop: 4,
        color: AppStyles.colors.grey,
        fontSize: 12,
        textAlign: 'left'
    },
    members: {
        color: AppStyles.colors.grey,
        fontSize: 11,
        textAlign: 'left'
    },
    actions: {
        color: AppStyles.colors.grey,
        fontSize: 11,
        textAlign: 'right',
        alignSelf: "flex-end"
    },

    footerItems: {
        flexDirection: 'row',
        alignSelf: "flex-end",
    },
    list: {
        justifyContent: 'center',
        alignItems: 'center'        
    }
});

export default styles;
