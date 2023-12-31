import "./App.css";
import Body from "./Components/Body";
import Header from "./Components/Header";
import { Provider } from "react-redux";
import AppStore from "./utils/AppStore";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import WatchPage from "./Components/WatchPage";
import MainContainer from "./Components/MainContainer";
import Results from "./Components/Results";

// const appRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: <Body />,
//     children: [
//       {
//         path: "/",
//         element: <MainContainer />,
//       },
//       {
//         path: "watch",
//         element: <WatchPage />,
//       },
//       {
//         path: "results",
//         element: <Results />,
//       },
//     ],
//   },
// ]);
function App() {
  return (
    <div className='flex flex-col h-full'>
      <Provider store={AppStore}>
        <Header />
        <Outlet />
        {/* <RouterProvider router={appRouter} /> */}
      </Provider>
    </div>
  );
}

export default App;
