import React, {
    StyleSheet,
    Text,
    View
} from 'react-native';
import SimpleButton from './SimpleButton';
import NoteList from './NoteList';

export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <NoteList
                    onSelectNote={this.props.onSelectNote}
                    notes = { this.props.notes }
                />
                <Text style={styles.noNotesText}>
                    You haven't create any notes!
                </Text>
                <SimpleButton
                    style={styles.simpleButton}
                    customText={'Create Note'}
                    onPress={ () => this.props.navigator.push({
                      name: 'createNote'
                    })}
                    textStyle={styles.simpleButtonText}/>
            </View>
        );
    }
}
var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#999',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 60,
    },
    noNotesText: {
        color: '#48209A',
        marginBottom: 10
    },
    simpleButton: {
        backgroundColor: '#5B29C1',
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderColor: '#48209A',
        borderWidth: 1,
        borderRadius: 4,
        shadowColor: 'darkgrey',
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowOpacity: 0.8,
        shadowRadius: 1
    },
    simpleButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16
    }
});
