
import { makeStyles } from '@mui/styles';



const useStylesBuiltInActions = makeStyles((theme) => ({
    
    actionsContainer: {
        display: 'flex', 
        flexFlow: 'column wrap', 
        marginRight: '20px', 
    }, 

    actionsButton: {
        color: '#FF6D6D', 
        width: '155px', 
        textAlign: 'right', 
        fontSize: '13px', 
        fontWeight: '500', 
        fontFamily: 'Lexend', 
        lineHeight: '1.75', 
        letterSpacing: '0.02857em', 
    }, 

    deleteLabel: {
        margin: '10px 0 5px 30px',
        color: '#FF6D6D',
        fontFamily: '"Lexend", sans-serif',
    }, 

    updateProductModalGeneral: {
        position: 'absolute',
        overflow: 'scroll',
        top: '50%',
        left: '75%',
        transform: 'translate(-50%, -50%)',
        width: '370px',
        height: '400px',
        backgroundColor: 'white',
        boxShadow: '0px 4px 16px rgba(43, 52, 69, 0.1)',
        borderRadius: '10px',
        padding: '40px',
        '@media (max-width: 900px)': {
            top: '50%',
            left: '50%',
            width: '320px', 
            padding: '40px 15px', 
            overflowX: 'hidden',
        },
    }, 

    updateProductModalText: {
        marginBottom: '30px', 
        marginLeft: '10px', 
        fontSize: '16px', 
    }, 

    addProductToSlideModalGeneral: {
        position: 'absolute',
        overflow: 'scroll',
        top: '50%',
        left: '70%',
        transform: 'translate(-50%, -50%)',
        width: '700px',
        backgroundColor: 'white',
        boxShadow: '0px 4px 16px rgba(43, 52, 69, 0.1)',
        borderRadius: '10px',
        padding: '40px',
        '@media (max-width: 1400px)': {
            left: '50%', 
        },
        '@media (max-width: 900px)': {
            width: '300px',
            padding: '20px',
            top: '45%',
            height: '75vh', 
        },
    }, 

    addProductToSlideModalMock: {
        display: 'flex', 

        padding: '20px', 
        borderRadius: '10px',
        border: `1px solid ${theme.palette.grey["300"]}`, 
        backgroundColor: "#EAF1EB", 

        '@media (max-width: 900px)': {
            flexDirection: 'column', 
            width: '260px',
            padding: '20px',
        },
    }, 

    addProductToSlideModalMockData: {
        display: 'flex', 
        flexDirection: 'column', 
    }, 

    addProductToSlideModalMockImage: {
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',  
    }, 

    addProductToSlideModalMockDataName: {
        color: '#1F2533', 
        letterSpacing: '-0.05em', 
        textAlign: 'left', 
        fontSize: '24px', 
        fontWeight: '500', 
        fontFamily: 'Lexend',
        lineHeight: '28px', 
        overflow: 'hidden', 
        '@media (max-width: 900px)': {
            textAlign: 'center',  
            marginBottom: '20px', 
        },
    }, 

    addProductToSlideModalMockDataDesc: {
        color: '#1F2533', 
        letterSpacing: '-0.05em', 
        textAlign: 'left', 
        fontSize: '16px',
        fontWeight: '300',
        fontFamily: '"Lexend",sans-serif',
        lineHeight: '28px', 
        overflow: 'hidden', 
        marginTop: '10px', 
        '@media (max-width: 900px)': {
            textAlign: 'center', 
            marginBottom: '20px',  
        },
    }, 

    addProductToSlideModalMockDataPrices: {
        display: 'flex', 
        justifyContent: 'flex-start', 
        alignItems: 'center',

        marginTop: '20px', 

        '@media (max-width: 900px)': {
            justifyContent: 'center', 
            marginBottom: '40px', 
        },
    }, 

    addProductToSlideModalMockDataCPrice: {
        color: '#E55C5C', 
        letterSpacing: '0.00938em', 
        textAlign: 'left', 
        fontSize: '24px',
        fontWeight: '700',
        fontFamily: '"Lexend",sans-serif',
        lineHeight: '28px', 
        overflow: 'hidden', 
        marginLeft: '15px'
    }, 

    addProductToSlideModalMockDataDPrice: {
        color: '#70737C', 
        textDecoration: 'line-through', 
        letterSpacing: '0.00938em', 
        textAlign: 'left', 
        fontSize: '20px',
        fontWeight: '600',
        fontFamily: '"Lexend",sans-serif',
        lineHeight: '24px', 
        overflow: 'hidden', 
        marginLeft: '15px'
    }, 


    addProductToSlideModalLabelContaner: {
        display: 'flex', 
        justifyContent: 'space-between',
        alignItems: 'center', 
        marginTop: '100px',

        '@media (max-width: 900px)': {
            flexDirection: 'column', 
            justifyContent: 'center', 
            alignItems: 'flex-start', 

            marginTop: '40px',
        },
    },

    addProductToSlideModalLabel: {
        '@media (max-width: 900px)': {
            marginBottom: '20px',  
            textAlign: 'center', 
        },
    }, 

    addProductToSlideModalLabelButton: {
        height: 36.5, 
        boxShadow: 1, 
        color: 'white', 
    }, 





    deleteProductModalGeneral: {
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        position: 'absolute',
        overflow: 'scroll',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '460px',
        height: '150px',
        backgroundColor: 'white',
        boxShadow: '0px 4px 16px rgba(43, 52, 69, 0.1)',
        borderRadius: '10px',
        padding: '40px',
        '@media (max-width: 900px)': {
            width: '300px', 
            height: '30vh', 
            padding: '40px 20px', 

        },
    }, 

    deleteProductModalGeneralButtonContainer: {
        display: 'flex', 
        flexFlow: 'row wrap', 
        justifyContent: 'space-around', 
        alignItems: 'center',

        marginTop: '20px', 

        '@media (max-width: 900px)': {
            marginTop: '30px',
        },
    }, 

    deleteProductModalGeneralButton: {
        boxShadow: 1, 
        color: 'white', 
        margin: '0 25px', 

        '@media (max-width: 900px)': {
            margin: '0 20px', 
            width: '100px', 
        },
    }, 

    zeroQuantityModalGeneral: {
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center',
        position: 'absolute',
        overflow: 'scroll',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '350px',
        height: '150px',
        backgroundColor: 'white',
        boxShadow: '0px 4px 16px rgba(43, 52, 69, 0.1)',
        borderRadius: '10px',
        padding: '40px',
        '@media (max-width: 900px)': {
            width: '250px', 
            height: '30vh', 
            padding: '40px 20px', 

        },
    }, 
})); 


export default useStylesBuiltInActions; 