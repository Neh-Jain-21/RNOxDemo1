import { Provider } from "react-redux";
// NAVIGATION
import Navigation from "@src/Navigation/Navigation";
// REDUX
import store from "@src/Redux/store";

const App = () => {
	return (
		<Provider store={store}>
			<Navigation />
		</Provider>
	);
};

export default App;
