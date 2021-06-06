import { useState } from "react";
import Form from "./components/form/Form";
import Contact from "./components/contacts/Contact";

const initialValues = { username: "", phoneNumber: "", gender: "NO INFO!" };

function App() {
  const [info, setInfo] = useState(initialValues);
  return (
    <div className="App">
      <Form className="form" info={info} setInfo={setInfo} />
      <Contact className="contacts" />
    </div>
  );
}

export default App;
