import * as React from 'react';
import { StripeProvider, Elements } from 'react-stripe-elements';
import Form from './Form';

import './scss/app';

export default class App extends React.Component<IAppProps, IAppState> {

    constructor(props: IAppProps) {
        super(props);
    }

    render() {
        return (
            <div className="baseElement">
                <StripeProvider apiKey="pk_test_aY4tBDlLDE9vshY5LMZqV2gv00ifjC92sB">
                    <Elements>
                        <Form />
                    </Elements>
                </StripeProvider>
            </div>
        )
    }
}

interface IAppProps { }

interface IAppState { }