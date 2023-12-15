import { createBoard } from '@wixc3/react-board';
import App from '../../../App';

export default createBoard({
    name: 'App',
    Board: () => <App />,
    environmentProps: {
        windowWidth: 1920,
        windowHeight: 1080,
        windowBackgroundColor: '#1e1e1e',
        canvasBackgroundColor: '#a4a4a4',
        canvasWidth: 982,
        canvasHeight: 708,
    },
    isSnippet: false
});
