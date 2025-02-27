import { useState } from "react";
import PostsList from "./components/PostsList";
import MainHeader from "./components/MainHeader";

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function showModalHandler() {
    setModalIsOpen(true);
  }

  function hideModalHandler() {
    setModalIsOpen(false);
  }

  return (
    <>
      <MainHeader onCreatePost={showModalHandler} />
      <main>
        <PostsList isPosting={modalIsOpen} onStopPosting={hideModalHandler} />
      </main>
    </>
  );
}

export default App;
