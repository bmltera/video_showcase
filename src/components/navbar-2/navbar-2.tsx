import classNames from 'classnames';
import styles from './navbar-2.module.scss';

export interface Navbar2Props {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Navbar2 = ({ className }: Navbar2Props) => {
    return (
        <div className={classNames(styles.root, className)}>
            <nav>
                <a href="/home">Home</a> | <a href="/booking">Booking</a>{' '}
                <a href="/gallery">Gallery</a> | <a href="/blog">Blog</a>
            </nav>
        </div>
    );
};
