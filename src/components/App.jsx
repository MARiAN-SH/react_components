import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// normal export
import { Dropdown } from './Dropdown/Dropdown';
import ColorPicker from './ColorPicker/ColorPicker';

// reexport
import Section from './Section';
import Home from './Home';
import { Counter } from './Counter';
import TodoList from './TodoList';
import Navbar from './Navbar';
import Module2 from './ModuleTwo';
import Module3 from './Module3';
import Module4 from './ModuleFour';

class App extends Component {
  state = {
    // COLOR-PICKER
    activeOptionsIdx: 1,
  };

  // COLOR-PICKER
  setActiveIdx = index => {
    this.setState({ activeOptionsIdx: index });
  };
  render() {
    // COLOR-PICKER
    const { setActiveIdx, state } = this;

    return (
      <main>
        <div className="container">
          <BrowserRouter>
            <Navbar />

            <Routes>
              {/* Home */}
              <Route
                path="/"
                element={
                  <Section title="Home">
                    <Home />
                  </Section>
                }
              ></Route>

              {/* Module 2 -- Form*/}
              <Route
                path="/module2"
                element={
                  <Section title="Module 2">
                    <Module2 />
                  </Section>
                }
              ></Route>

              {/* Module 3 */}
              <Route
                path="/module3"
                element={
                  <Section title="Module 3">
                    <Module3 />
                  </Section>
                }
              ></Route>
              {/* Module 4 */}
              <Route
                path="/module4"
                element={
                  <Section title="Module 4">
                    <Module4 />
                  </Section>
                }
              ></Route>

              {/* Counter */}
              <Route path="/counter" element={<Counter step={5} />}></Route>

              {/* color-picker */}
              <Route
                path="/color-picker"
                element={
                  <Section title="Color Picker">
                    <ColorPicker
                      setActiveIdx={setActiveIdx}
                      options={state.activeOptionsIdx}
                    />
                  </Section>
                }
              ></Route>

              {/* Popup */}
              <Route
                path="/popup"
                element={
                  <Section title="Popup">
                    <Dropdown />
                  </Section>
                }
              ></Route>

              {/* Todo List */}
              <Route
                path="/todo-list"
                element={
                  <Section title="Todo List">
                    <TodoList />
                  </Section>
                }
              ></Route>
            </Routes>
          </BrowserRouter>
        </div>
      </main>
    );
  }
}
export default App;
