import "./globals.css";
import Input from "components/Input/Input";
import LinkBar from "components/LinkBar/LinkBar";
import List from "components/List/List";

export default function Page() {
  return (
    <div className="toDoContainer">
      <Input />
      <ul className="ul">
        <List myList={"eat dinner"} />
      </ul>
      <LinkBar number={1} item={"item"} />
    </div>
  );
}
