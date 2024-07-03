import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../utils";
import Game from "./Game";

test("renders Game component", () => {
    render(
        <Provider store={store}>
            <Game
                user="Test User"
                balance={1000}
                setBalance={jest.fn()}
                isDemo={true}
                bet={100}
                setBet={jest.fn()}
            />
        </Provider>
    );
});

test("increments example value", () => {
    render(
        <Provider store={store}>
            <Game
                user="Test User"
                balance={1000}
                setBalance={jest.fn()}
                isDemo={true}
                bet={100}
                setBet={jest.fn()}
            />
        </Provider>
    );
});
