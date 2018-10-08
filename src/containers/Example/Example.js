import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { onAddTodo } from "../../redux/modules/todos";
import {
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
  RadioGroup,
  Radio,
  Typography
} from "@material-ui/core";
import {
  getTranslate,
  getActiveLanguage,
  getLanguages,
  withLocalize
} from "react-localize-redux";

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
    const {
      languages,
      currentLanguage,
      setActiveLanguage,
      translate,
      todos
    } = this.props;
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

        <hr />

        <h3>Example: Localization (with react-localize-redux)</h3>
        <RadioGroup
          aria-label="locale"
          name="locale"
          style={{
            flexDirection: "row"
          }}
          value={currentLanguage}
          onChange={e => setActiveLanguage(e.target.value)}
        >
          {languages.map(language => (
            <FormControlLabel
              value={language.code}
              control={<Radio color="primary" />}
              label={language.name}
            />
          ))}
        </RadioGroup>

        <Typography>{translate("hello")}, Alice!</Typography>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  translate: getTranslate(state.localize),
  currentLanguage: getActiveLanguage(state.localize).code,
  languages: getLanguages(state.localize),
  todos: state.todos
});

const mapDispatchToProps = dispatch => ({
  onAddTodo: bindActionCreators(onAddTodo, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withLocalize(Example));
