import { Component } from "react";
import ClassAccordion from "./ClassAccordion";
import ButtonClass from "./ButtonClass";

export default class AppClass extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [], page: 1 };
  }

  getPage = (page) => {
    this.setState(() => {
      return { page };
    });
  };

  componentDidMount() {
    fetch("https://countriesnow.space/api/v0.1/countries/capital")
      .then((response) => response.json())
      .then((result) =>
        this.setState((state) => {
          return { data: result.data };
        })
      );
  }

  render() {
    const data = this.state.data;
    const length = data.length;
    const count = 10;
    const start = (this.state.page - 1) * count;
    const end = start + count;
    const dataArray = data.slice(start, end);
    return (
      <div>
        <h1>ClassComponent</h1>
        {
        dataArray?.map((item, index) => {
          return <ClassAccordion key={index} item={item} />;
        })
        }
        <ButtonClass length={length} count={count} getPage={this.getPage} />
      </div>
    );
  }
}
