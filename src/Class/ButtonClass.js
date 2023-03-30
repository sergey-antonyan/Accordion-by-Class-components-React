import {Component} from "react";

export default class ButtonClass extends Component{
  constructor(props) {
    super(props)

  }

 

  render() {
    const {length,count,getPage} = this.props;
    const button = Math.ceil(length / count);
    const arr = Array.from({length: button}, (_, index) => index + 1)

    return (
      <div className='btnContainer'>
        {
          arr.map((el, index)=>{
            return  <button className='btn' key = {index} onClick = {(event)=> getPage(event.target.value)} value= {el}>{el}</button>
          })
        }
      </div>
    )
  }
}
