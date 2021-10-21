// React is loaded and is available as React and ReactDOM

const { open } = require("fs")

// imports should NOT be used
const TodoItem = (props) => <li onClick={props.onClick}>{props.item.text}</li>

function TodoListHook(props) {
  const {items, onListClick} = props

  const handleItemClick = (item) => {
    if(item.done) {
      onListClick = {}
    }
    return items.filter(i => i.text !== item.text)
  }

  return (<ul onClick={onListClick}>
    {items.map((item, index) => 
               <TodoItem item={item} key={index} onClick={handleItemClick(item)}/>)}
  </ul>);
}

class TodoList extends React.Component {
  render() {
    const { items, onListClick } = this.props;
    return (<ul onClick={onListClick}>
      {items.map((item, index) => 
                 <TodoItem item={item} key={index} onClick={this.handleItemClick.bind(this, item)}/>)}
    </ul>);
  }
  
  handleItemClick(item, event) {
    event.preventDefault()
    const itemCopy = [...item]
    if(itemCopy.done) {
      event.stopPropagation()  
      return
    }

    return itemCopy.filter(i => {
      if(i.text === item.text) {
        onItemClick(i.text, i.done)
      }
    })
  }
}


const items = [ { text: 'Buy grocery', done: true },
  { text: 'Play guitar', done: false },
  { text: 'Romantic dinner', done: false }
];

const App = (props) => <TodoList
  items={props.items}
  onListClick={(event) => console.log("List clicked!")}
  onItemClick={(item, event) => { console.log(item, event) }}
/>;

document.body.innerHTML = "<div id='root'></div>";
const rootElement = document.getElementById("root");
ReactDOM.render(<App items={items}/>, rootElement);



///////////
// React is loaded and is available as React and ReactDOM
// imports should NOT be used
function MessageHook() {
  const [open, setOpen] = React.useState()

  function messageHandler() {
    setOpen(!open)
  }

  return (<React.Fragment>
    <a href="#" onClick={messageHandler}>Want to buy a new car?</a>
    {open && <p>Call +11 22 33 44 now!</p>}
    
  </React.Fragment>);
}


class Message extends React.Component {
  constructor(props) {
    super(props)
    this.state = { open: false}
  }

  messageHandler() {
    this.setState({open: !open})
  }

  render() {
    return (<React.Fragment>
          <a href="#" onClick={this.messageHandler.bind()}>Want to buy a new car?</a>
          {this.state.open && <p>Call +11 22 33 44 now!</p>}
          
        </React.Fragment>);
  }
}

document.body.innerHTML = "<div id='root'> </div>";
  
const rootElement = document.getElementById("root");
ReactDOM.render(<Message />, rootElement);

console.log("Before click: " + rootElement.innerHTML);
document.querySelector("a").click();
console.log("After click: " + rootElement.innerHTML);


// React is loaded and is available as React and ReactDOM
// imports should NOT be used
function FocusabledInput(props) {
  const [focus, setFocus] = React.useState(false)

  ref = React.createRef()
  
  React.useEffect(() => {
    if(focus !== props.focused && props.focused ) {
      ref.current.focus()
    }
  }, [focus])
  
  return <TextInput ref={this.ref} />
}

class Input extends React.PureComponent {
  render() {
    let {forwardedRef, ...otherProps} = this.props; 
    return <input {...otherProps} ref={forwardedRef} />;
  }
}

const TextInput = React.forwardRef((props, ref) => {
  return <Input {...props} forwardedRef={ref} />
});

class FocusableInput extends React.Component {
  
  ref = React.createRef()

  render() {
    return <TextInput ref={this.ref} />;
  }

  componentDidUpdate(prevProps) {
    if(prevProps.focused != this.props.focused && this.props.focused){
      this.ref.current.focus();
    }
  }

  componentDidMount() {
    if(this.props.focused){
      this.ref.current.focus();
    }
  }
}

FocusableInput.defaultProps = {
  focused: false
};

const App = (props) => <FocusableInput focused={props.focused} />;

document.body.innerHTML = "<div id='root'></div>";
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);