import React from "react";
import { Router } from 'react-router-dom';
import { createBrowserHistory } from "history";
import { act } from "react-dom/test-utils";

const routerWrapper = async (Component) => {
    let wrap;
    let history = createBrowserHistory();
    await act(async () => {
        wrap = <Router history={history}>{Component}</Router>
    });
    return { wrap, history };
}

export default routerWrapper;