import React from 'react';
import Flux from "@4geeksacademy/react-flux-dash";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {Notifier} from './utils/notifier';
import {Invite, Login} from "./views/auth";
import NotFound from "./views/NotFound.jsx";
import Theme from "./components/theme/dist/index";

export default class Layout extends Flux.View {
    render() {
        return (
            <Theme.Wrapper>
                <BrowserRouter>
                    <div>
                        <Notifier/>
                        <Switch>
                            <Route extact path="/invite" component={Invite} />
                            <Route extact path="/login" component={Login} />
                            <Route component={NotFound} />
                        </Switch>
                    </div>
                </BrowserRouter>
            </Theme.Wrapper>
        );
    }
}
