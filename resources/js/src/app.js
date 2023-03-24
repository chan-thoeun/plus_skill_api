import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'next-themes';
if (typeof window !== 'undefined') {
  require( 'bootstrap/dist/js/bootstrap' );
}
import { store } from '../src/redux/store';
import Theme from '../src/components/common/theme';
import { MouseMoveProvider } from '../src/contexts/mouse-move-context';
import MyApp from '../src/pages/_app';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.Fragment>
	<Provider store={ store }>
		<ThemeProvider defaultTheme="light">
			<MouseMoveProvider>
				<MyApp />
			</MouseMoveProvider>
			<Theme />
		</ThemeProvider>
	</Provider>
</React.Fragment>
);