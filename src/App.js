import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (
    <Router>
        <Switch> {/* Switch 사용 이유 : 한번에 하나의 Route만 렌더링 하기 위해 */}
            <Route path="/movie/:id"> {/* 동적 ':' 필수 없으면 그냥 movie/id로 감 */}
              <Detail />
            </Route>
            <Route path="/">
              <Home />
            </Route>
        </Switch>
    </Router>
  );
}

export default App;

// api : https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year