import { useState } from "react";
import Button from "./components/Button";
import Alert from "./components/Alert";
//import ListGroup from "./components/ListGroup";

function App() {
  //let items = ["Karachi", "Lahore", "Faisalabad", "Peshawar"];

  // const handleSelectedItem = (item: string) => {
  //   console.log(item);
  // };

  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <div>
      {alertVisible && (
        <Alert
          onClose={() => {
            setAlertVisibility(false);
          }}
        >
          {" "}
          You are done{" "}
        </Alert>
      )}
      <Button color="primary" onClick={() => setAlertVisibility(!alertVisible)}>
        Click me
      </Button>
    </div>
  );
}

export default App;

//  <ListGroup
// items={items}
// heading="City list"
// onSelectItem={handleSelectedItem}
// ></ListGroup>
