import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { red, blue, green, purple } from './Actions/ChooseColorActions';

function App() {
	const color = useSelector(state=>state);
	const dispatch = useDispatch();
	return (
		<div className="App">
			<h1>Which color do you prefer between these choices?</h1>
			<button type='radio' onClick={() => dispatch(red())}>Red</button>
			<button type='radio' onClick={() => dispatch(blue())}>Blue</button>
			<button type='radio' onClick={() => dispatch(green())}>Green</button>
			<button type='radio' onClick={() => dispatch(purple())}>Purple</button>
			<br />
			<h3>
				Selected Color: {color}
			</h3>
		</div>
	);
}

export default App;
