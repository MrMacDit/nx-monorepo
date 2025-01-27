// Uncomment this line to use CSS modules
// import styles from './app.module.css';
// import NxWelcome from './nx-welcome';
import TaskList from './components/taskList';
import { sharedState } from '@angular-react-project/shared-lib';
// import '../../../tailwind.css';

// import { Route, Routes, Link } from 'react-router-dom';

export function App() {
  sharedState.updateData('This is just me running a test');
  return (
    <div>
      {/* <NxWelcome title="react-app" /> */}
      <TaskList />

      {/* START: routes */}
      {/* These routes and navigation have been generated for you */}
      {/* Feel free to move and update them to fit your needs */}
      {/* <br />
      <hr />
      <br />
      <div role="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/page-2">Page 2</Link>
          </li>
          <li>{sharedState.data}</li>
        </ul>
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              This is the generated root route.{' '}
              <Link to="/page-2">Click here for page 2.</Link>
            </div>
          }
        />
        <Route
          path="/page-2"
          element={
            <div>
              <Link to="/">Click here to go back to root page.</Link>
            </div>
          }
        />
      </Routes> */}
      {/* END: routes */}
    </div>
  );
}

export default App;
