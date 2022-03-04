import React, { Component } from "react";
import ProgressBar from "./components/progressBar";
import MainArea from "./components/mainArea";
import CheckList from "./components/checklist";
import "./App.css";

class App extends Component {
  state = {
    progressBar: {
      heading: "Task Progress",
      message:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni vero distinctio facere modi illo nobis unde iure? Officia, sequi voluptatibus!",
      count: 6,
      level: 5,
      end: false,
    },
    tasks: null,
  };

  componentDidMount() {
    const tasks = [
      { _id: 1, name: "task 1", done: false },
      { _id: 2, name: "task 2", done: false },
      { _id: 3, name: "task 3", done: false },
      { _id: 4, name: "task 4", done: false },
      { _id: 5, name: "task 5", done: false },
      { _id: 6, name: "task 6", done: false },
    ];

    const prog = { ...this.state.progressBar };

    prog.count = tasks.length;
    prog.level = 0;

    this.setState({ tasks });
    this.setState({ progressBar: prog });
  }

  handleSubmit = () => {
    const progressBar = { ...this.state.progressBar };
    const tasks = [...this.state.tasks];

    if (progressBar.level >= progressBar.count) {
      progressBar.end = true;
      this.setState({ progressBar });
      alert("Congratulations! You have completed the task.");
      return;
    }

    tasks[progressBar.level].done = true;
    progressBar.level += 1;
    this.setState({ progressBar, tasks });
  };

  render() {
    const { tasks } = this.state;
    const { heading, message, level, count, end } = this.state.progressBar;
    const { progressBar } = this.state;
    return (
      <div className="wrapper ">
        <div className="grid">
          <div className="progressBar common">
            <ProgressBar
              heading={heading}
              message={message}
              level={level}
              count={count}
            />
          </div>
          <div className="main-area common">
            <MainArea
              onSubmit={this.handleSubmit}
              end={end}
              task={tasks && progressBar && tasks[level]}
            />
          </div>
          <div className="checklist common">
            <CheckList items={tasks} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
