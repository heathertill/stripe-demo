import * as React from 'react';
import { CardElement, injectStripe, ReactStripeElements } from 'react-stripe-elements';

class Form extends React.Component<IFormProps, IFormState> {

    constructor(props: IFormProps) {
        super(props);
        this.state = {
            name: '',
            amount: ''
        };
    }

    handleSubmit = async (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            let { token } = await this.props.stripe.createToken({ name: this.state.name });
            let amount = this.state.amount;
            await fetch('/api/donate', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({ token, amount })
            })
            // redirect, clear inputs, thanks alert
        } catch (err) {
            throw err;
        }
    }

    render() {
        return (
            <main className="container">
                <form
                    className="from-group mt-3 border border-primary rounded shadow-lg p-3"
                    onSubmit={this.handleSubmit}
                >
                    <label>Name</label>
                    <input
                        type="text"
                        className="input-group my-1 p-1 border border-dark"
                        value={this.state.name}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ name: e.target.value })}
                    />
                    <label>Amount</label>
                    <input
                        type="text"
                        className="input-group my-1 p-1 border border-dark"
                        value={this.state.amount}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ amount: e.target.value })}
                    />
                    <label>CC Number - - Exp. Date - - CVC</label>
                    <CardElement className="p-2 border border-dark" />
                    <button className="btn btn-primary border border-dark mt-3 shadow">Charge It!</button>
                </form>
            </main>
        );

    }
}

interface IFormProps extends ReactStripeElements.InjectedStripeProps { }

interface IFormState {
    name: string,
    amount: string
}

export default injectStripe(Form);