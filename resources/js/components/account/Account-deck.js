import React, {useState} from 'react';
import {Row} from 'react-bootstrap';
import AccountCard from './Account-card';
import User from '../../User.js';

function AccountDeck (props) {
  const [titles, setTitles] = useState(props.titles);
  const cards = (titles)
    ? titles.map((title, i) => <AccountCard title={title} key={i} />)
    : <p className="m-0 text-center">まずは新しい家計簿を作成しましょう！</p>
  ;

  return (
    <div className="bg-light rounded p-4">
      <Row>
        {cards}
      </Row>
    </div>
  );
}

// class AccountDeck extends React.Component {
//     constructor (props) {
//         super(props);
//         this.state = {
//             titles: null,
//         }
//         // 一番最初に render() が呼ばれるタイミングでは titles はセットされてない。
//         // 同期処理が完了し、titles に値がセットされたタイミングで再度 render() が呼ばれる。
//     }

//     render () {
//         const titles = this.state.titles;
//         let cards;
//         if (titles) {
//             cards = titles.map((title, i) => {
//                 return <AccountCard title={title} key={i} />
//             });
//         }

//         return (
//             <div className="bg-light rounded p-4">
//                 <Row>
//                     {cards}
//                 </Row>
//             </div>
//         )
//     }
// }

export default AccountDeck;
