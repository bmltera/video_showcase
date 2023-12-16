import { createBoard } from '@wixc3/react-board';
import App from '../../../App';

export default createBoard({
    name: 'App',
    Board: () => <App />,
    environmentProps: {
        windowWidth: 1024,
        windowHeight: 768,
        windowBackgroundColor: '#6a6a6a',
        canvasBackgroundColor: '#aaaaaa',
        canvasWidth: 638,
        canvasHeight: 834,
    },
    isSnippet: false
});
