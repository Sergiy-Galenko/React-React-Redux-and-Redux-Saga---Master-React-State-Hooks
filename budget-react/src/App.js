import { Container, Header, Statistic } from "semantic-ui-react";
import "./App.css";

function App() {
    return (
        <Container>
            <Header>Budget</Header>
            <Statistic size="small">
                <Statistic.Label>Your Balance</Statistic.Label>
                <Statistic.Label>2,550.33</Statistic.Label>
            </Statistic>
        </Container>
    );
}

export default App;
