import { useState } from "react";
import Form from "./components/form/Form";
import Contact from "./components/contacts/Contacts";
import { addInfo } from "./utils/functions";

const initialValues = { username: "", phoneNumber: "", gender: "NO INFO!" };
function App() {
  const [info, setInfo] = useState(initialValues);

  const handleFormSubmit = () => {
    console.log("HFS");
    addInfo(info);
  };
  return (
    <div className="App">
      <Form
        className="form"
        info={info}
        setInfo={setInfo}
        handleFormSubmit={handleFormSubmit}
      />
      <Contact className="contacts" />
    </div>
  );
}

export default App;
