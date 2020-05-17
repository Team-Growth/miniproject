import React, { useState, useEffect, CSSProperties } from "react";
import getDummys from "../api/service/DummyService";
import IDummy from "../api/models/Dummy";
import CardViewGroup from "../components/UI/organisms/CardViewGroup";
import FloatingButton from "../components/UI/atoms/FloatingButton";
import AddIcon from "@material-ui/icons/Add";
import HelpIcon from "@material-ui/icons/Help";
import Header from "../components/UI/organisms/Header";

function App() {
  const [dummys, setDummys] = useState<IDummy[]>([]);

  useEffect(() => {
    const datas = getDummys(15);
    setDummys(datas);
  }, []);

  return (
    <div>
      <Header />
      <CardViewGroup datas={dummys} />
      <FloatingButton position={{ right: 20, bottom: 80 }}>
        <AddIcon />
      </FloatingButton>

      <FloatingButton position={{ right: 20, bottom: 20 }}>
        <HelpIcon />
      </FloatingButton>
    </div>
  );
}

export default App;
