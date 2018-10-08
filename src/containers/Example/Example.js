import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { onAddTodo } from "../../redux/modules/todos";
import {
  TextField,
  Button,
  FormControlLabel,
  Checkbox
} from "@material-ui/core";

class Example extends Component {
  state = {
    todo: ""
  };

  addTodo = todo => {
    if (todo.length > 0) {
      this.props.onAddTodo(todo);
      setTimeout(() => {
        this.setState({
          todo: ""
        });
      }, 300);
    }
  };

  render() {
    const { todos } = this.props;
    const { todo } = this.state;

    return (
      <div>
        <h3>Example: Todo list (using redux)</h3>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center"
          }}
        >
          <TextField
            id="outlined-todo"
            label="Todo"
            value={todo}
            margin="normal"
            variant="outlined"
            style={{
              marginRight: 24
            }}
            onChange={e =>
              this.setState({
                todo: e.target.value
              })
            }
          />
          <Button variant="contained" onClick={e => this.addTodo(todo)}>
            Add
          </Button>
        </div>

        {todos.map((t, idx) => (
          <FormControlLabel control={<Checkbox />} label={t} key={idx} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = dispatch => ({
  onAddTodo: bindActionCreators(onAddTodo, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Example);
