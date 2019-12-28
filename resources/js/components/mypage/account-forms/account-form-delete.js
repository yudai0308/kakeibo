import React from "react";
import { Button } from "react-bootstrap";
import { axios } from "../../../axios";

function AccountDeleteForm({ account, setShowModal, fetchAccounts }) {
  const deleteAccount = async () => {
    const url = `/api/account/${account.id}`;
    const res = await axios.delete(url);
    fetchAccounts();
    setShowModal(false);
  }
  const cancel = () => setShowModal(false);

  return (
    <>
      <p className="mb-4">削除してもよろしいですか？</p>
      <div className="d-flex justify-content-end">
        <Button
          variant="secondary"
          className="mr-2"
          onClick={cancel}
        >
          キャンセル
        </Button>
        <Button
          variant="danger"
          onClick={deleteAccount}
        >
          削除
        </Button>
      </div>
    </>
  );
}

export default AccountDeleteForm;
