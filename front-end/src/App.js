import "./App.module.css";
import Loading from "./Components/UI/Loading/Loading";
import Login from "./Containers/Login/Login";
import Layout from "./HOC/Layout/Layout1";
function App() {
	return (
		<div>
			{/* <Loading /> */}
			<Layout>
				<Login />
			</Layout>
		</div>
	);
}

export default App;
