import React from 'react';
import ReactDOM from 'react-dom';
import {Row} from 'react-bootstrap';
import AccountCard from './Account-card';
import User from '../../User.js';
import {axios} from "../../axios";

class AccountDeck extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            titles: null,
        }
        // 一番最初に render() が呼ばれるタイミングでは titles はセットされてない。
        // 同期処理が完了し、titles に値がセットされたタイミングで再度 render() が呼ばれる。
    }

    componentDidMount () {
        axios.get("/api/auth_user")
             .then(res => {
                 const user = res.data;
                 axios.get(`/api/user/${user.id}/accounts`)
                      .then(res => {
                          const accounts = res.data;
                          console.log(accounts)
                          const titles = accounts.map(a => a.name);
                          this.setState({titles: titles});
                      })
             })
    }

    // async getUser () {
    //     const user = await axios.get("/api/auth_user");
    //     return user.data;
    // }

    // async getMyAccounts (id) {
    //     const url = `/api/user/${id}/accounts`;
    //     const res = await axios.get(url);
    //     return res.data;
    // }

    // async getTitles () {
    //     const user = await this.getUser();
    //     const accounts = await this.getMyAccounts(user.id);
    //     const titles = accounts.map(a => a.name);
    //     this.setState({titles: titles})
    //     return;
    // }

    render () {
        const titles = this.state.titles;
        let cards;
        if (titles) {
            cards = titles.map((title, i) => {
                return <AccountCard title={title} key={i} />
            });
        }

        return (
            <div className="bg-light rounded p-4">
                <Row>
                    {cards}
                </Row>
            </div>
        )
    }
}

export default AccountDeck;
