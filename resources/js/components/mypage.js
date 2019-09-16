import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import {axios} from "../axios";
import {Container, Row, Col} from 'react-bootstrap';
import AccountForm from './account/Account-form-modal';
import AccountDeck from './account/Account-deck';

function Mypage () {
  const [titles, setTitles] = useState(null);

  useEffect(() => {
    const fetchTitles = async () =>{
      let res;
      res = await axios.get("/api/auth_user");
      const user = res.data;
      res = await axios.get(`/api/user/${user.id}/accounts`)
      const accounts = res.data;
      const titles = accounts.map(a => a.name);
      setTitles(titles);
    }
    fetchTitles();
  // 第２引数にこの副作用が依存している値の配列を渡すことができる。
  // 空の配列を渡すとコンポーネント内のどの値にも依存してないことを示すことができる
  // この場合、マウント時に実行、アンマウント時にクリーンアップされるが、アップデート時は実行されない。
  }, []);

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md="8">
          <div className="mb-4 border-bottom">
            <p className="font-weight-bold">あなたが作成した家計簿</p>
          </div>
          <AccountForm />
          <AccountDeck titles={titles} />
        </Col>
      </Row>
    </Container>
  );
}

if (document.getElementById("mypage")) {
  ReactDOM.render(
      <Mypage />,
      document.getElementById("mypage")
  );
}
