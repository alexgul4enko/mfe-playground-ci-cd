import { createRoot } from 'react-dom/client';
import { App } from 'mfe0-test-app';

const elem = document.getElementById('root')
if(elem) {
	const root = createRoot(elem);
	root.render(<App/>);
}

