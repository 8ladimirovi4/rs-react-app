import './App.css';
import 'styles/output.css';
import TopControls from 'layouts/Top_controls/TopControls';
import ErrorBoundary from 'components/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <TopControls />
    </ErrorBoundary>
  );
}

export default App;
