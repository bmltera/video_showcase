import { createBoard } from '@wixc3/react-board';
import { Navbar } from '../../../components/navbar/navbar';

export default createBoard({
    name: 'oldNavbar',
    Board: () => <Navbar />,
    isSnippet: true,
    environmentProps: {
        canvasWidth: 234,
        canvasHeight: 2078,
        windowWidth: 588,
    }
});
