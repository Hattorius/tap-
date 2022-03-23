import styled from 'styled-components/native';
import { Text } from './Themed';

const Wrapper = styled.View`
    width: 100%;
    padding: 6px;
`;

const Title = styled.Text`
    color: #fff;
    font-size: 26px;
    margin-bottom: 5px;
`;

const List = styled.View`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const LeaderboardItem = styled.View`
    background: #0d0d0d;
    width: 100%;
    padding: 5px;
    margin-top: 5px;
    display: flex;
    flex-direction: row;
`;

const LeaderboardItemLeft = styled.View`
    width: 60%;
`;

const Username = styled.Text`
    color: #fff;
    font-size: 22px;
    overflow: hidden;
`;

const LeaderboardItemRight = styled.View`
    width: 40%;
`;

const Taps = styled.Text`
    color: #fff;
    font-size: 22px;
`;

function LeaderboardListItem(props: {username: string, taps: number}) {
    return (
        <LeaderboardItem>
            <LeaderboardItemLeft>
                <Username numberOfLines={1}>{props.username}</Username>
            </LeaderboardItemLeft>
            <LeaderboardItemRight>
                <Taps numberOfLines={1}>{props.taps}</Taps>
            </LeaderboardItemRight>
        </LeaderboardItem>
    );
}

export default function LeaderboardComponent(props: {taps: number}) {


    return (
        <Wrapper>
            <Title>Leaderboard</Title>
            <List>
                <LeaderboardListItem username="hattorius" taps={Math.round(Math.random() * 12345678)}/>
                <LeaderboardListItem username="hattorius" taps={Math.round(Math.random() * 12345678)}/>
                <LeaderboardListItem username="hattorius" taps={Math.round(Math.random() * 12345678)}/>
                <LeaderboardListItem username="hattorius" taps={Math.round(Math.random() * 12345678)}/>
                <LeaderboardListItem username="hattorius" taps={Math.round(Math.random() * 12345678)}/>
                <LeaderboardListItem username="hattorius" taps={Math.round(Math.random() * 12345678)}/>
                <LeaderboardListItem username="hattorius" taps={Math.round(Math.random() * 12345678)}/>
                <LeaderboardListItem username="hattorius" taps={Math.round(Math.random() * 12345678)}/>
                
                <LeaderboardListItem username="hattorius" taps={props.taps}/>
            </List>
        </Wrapper>
    );
}
