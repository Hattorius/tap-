import { ScrollView, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import styled from 'styled-components/native';
import { useState } from 'react';
import LeaderboardComponent from '../components/Leaderboard';
import * as Application from 'expo-application';

const Wrapper = styled.View`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const PressMe = styled.TouchableOpacity`
    font-size: 64px;
    height: 40%;
    min-height: 300px;
    display: flex;
    justify-content: center;
`;

const PressMeText = styled.Text`
    color: #fff;
    font-size: 64px;
`;

const YourTaps = styled.Text`
    text-align: center;
    color: #fff;
`;

const Leaderboard = styled.View`
    height: 60%;
    width: 100%;
`;

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
    const [taps, setTaps] = useState(0);

    return (
        <Wrapper>
            <PressMe onPress={() => setTaps(taps + 1)}>
                <Text>{Application.androidId}</Text>
                <PressMeText>Tap me</PressMeText>
                <YourTaps>Your taps: {taps}</YourTaps>
            </PressMe>
            <Leaderboard>
                <LeaderboardComponent taps={taps}/>
            </Leaderboard>
        </Wrapper>
    );
}
