import * as React from 'react';
import { StripeProvider, Elements } from 'react-stripe-elements'

import './scss/app';

export default class App extends React.Component<IAppProps, IAppState> {

    constructor(props: IAppProps) {
        super(props);

    }



    render() {
        return (
            <>
                <StripeProvider apiKey="">
                    <Elements>

                    </Elements>
                </StripeProvider>
            </>
        )
    }
}

interface IAppProps { }

interface IAppState { }