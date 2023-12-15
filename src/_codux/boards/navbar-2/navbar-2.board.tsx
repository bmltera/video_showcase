import { createBoard } from '@wixc3/react-board';
import { Navbar2 } from '../../../components/navbar-2/navbar-2';

export default createBoard({
    name: 'Navbar2',
    Board: () => <Navbar2 />,
    isSnippet: true,
});
