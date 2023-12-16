import { createBoard } from '@wixc3/react-board';
import Gallery from '../../../pages/Gallery';

export default createBoard({
    name: 'Gallery',
    Board: () => <Gallery />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 1920,
        windowHeight: 1080,
        canvasWidth: 1322
    }

});
