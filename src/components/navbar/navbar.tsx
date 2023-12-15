import classNames from 'classnames';
import styles from './navbar.module.scss';
import { Menu } from 'semantic-ui-react';

export interface NavbarProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */



export const Navbar = ({ className }: NavbarProps) => {
    return (
        <div className={classNames(styles.root, className)} >
            <nav><Menu
                defaultActiveIndex={0}
                onItemClick={undefined}
                text={true}
                attached={false}
                items={[
                    <Menu.Item key="home" name="home">
                        Home
                    </Menu.Item>,
                    <Menu.Item key="booking" name="booking">
                        Booking
                    </Menu.Item>,
                    <Menu.Item key="gallery" name="gallery">
                        Gallery
                    </Menu.Item>,
                    <Menu.Item key="blog" name="blog">
                        Blog
                    </Menu.Item>,
                ]}
            ></Menu></nav>
        </div>
    );
};
