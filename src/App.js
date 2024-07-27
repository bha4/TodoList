import { useState } from "react";
import AddItems from "./components/AddItems";
import Context from "./components/Context";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SearchItem from "./components/SearchItem";

function App() {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("Todolist"))
  );

  const [addItems, setAddItems] = useState("");

  const [search,setSearch]=useState("");

  const addItem = (content) => {
    let id = items.length ? items[items.length - 1].id + 1 : 1;
    const newItem = { id, content, state: false };
    const newList = [...items, newItem];
    save(newList);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    addItem(addItems);
    setAddItems("");
  };

  const deleteHandler = (id) => {
    const newList = items.filter((item) => item.id !== id);
    save(newList);
  };

  const changeHandler = (id) => {
    const newList = items.map((item) =>
      item.id === id ? { ...item, state: !item.state } : item
    );
    save(newList);
  };

  const save = (newList) => {
    setItems(newList);
    localStorage.setItem("Todolist", JSON.stringify(newList));
  };
  const filteredItem = items.filter((item) =>
    item.content.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="App">
      <Header title="Bharathi" />
      <AddItems
        addItems={addItems}
        setAddItems={setAddItems}
        submitHandler={submitHandler}
      />
      <SearchItem 
      search={search}
      setSearch={setSearch}/>
      <Context
        items={filteredItem}
        deleteHandler={deleteHandler}
        changeHandler={changeHandler}
      />
      <Footer items={items} />
    </div>
  );
}

export default App;
