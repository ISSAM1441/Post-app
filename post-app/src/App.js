import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import PostsReview from './component/PostsReview';
import PostDetails from './component/PostDetails';
import ErrorPage from './component/ErrorPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/*============================= Main page Posts =============================*/}
          <Route path="/" exact element={<PostsReview />} />

          {/*========================= Detailed post page by Id ========================*/}
          <Route path="/post/:postId" element={<PostDetails />} />

          {/*========================== Error Page not found ===========================*/}
          <Route path="*" element={<ErrorPage />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
