import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'next-themes';
if (typeof window !== 'undefined') {
  require( 'bootstrap/dist/js/bootstrap' );
}
import { ToastContainer } from 'react-toastify';
import { store } from '../src/redux/store';
import Theme from '../src/components/common/theme';
import { MouseMoveProvider } from '../src/contexts/mouse-move-context';
import MyApp from '../src/pages/_app';
import { Mumbai } from "@thirdweb-dev/chains";
import { ThirdwebProvider } from "@thirdweb-dev/react";
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<React.Fragment>
	<Provider store={ store }>
		<ThemeProvider defaultTheme="light">
			<MouseMoveProvider>
				<ThirdwebProvider supportedChains={[Mumbai]}>
					<MyApp />
				</ThirdwebProvider>
			</MouseMoveProvider>
			<Theme />
		</ThemeProvider>
	</Provider>
</React.Fragment>
);