import { Dropdown } from "react-bootstrap";

function DropdownFuncs() {
  const copyUrl = (e, setModalContent, setShowModal) => {
    setModalContent({
      title: "URL コピー",
      body: <p>URL をコピーしました！</p>
    });
    setShowModal(true);
  }

  const showUpdateModal = (e, setModalContent, setShowModal) => {
    setModalContent({
      title: "家計簿の編集",
      body: <p>test</p>
    });
    setShowModal(true);
  }

  const showDeleteDialog = (e, setModalContent, setShowModal) => {
    setModalContent({
      title: "家計簿の削除",
      body: <p>test</p>
    });
    setShowModal(true);
  }
}

export default DropdownFuncs;
