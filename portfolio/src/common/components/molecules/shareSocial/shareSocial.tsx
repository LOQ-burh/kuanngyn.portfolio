import { GithubCircle, FbCircle } from '../../atoms/icons';

import styles from './shareSocial.module.css';

export function ShareSocial() {
    return (
        <div className='fixed right-8 bottom-0 z-50'>
            <ul data-aos="fade-up" className={styles.list}>
                <li>
                    <a
                        href="https://github.com/nhanng19"
                        aria-label="Github"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FbCircle />
                    </a>
                </li>
                <li>
                    <a
                        href="https://gitlab.com/nhanng19"
                        aria-label="Github"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <GithubCircle />
                    </a>
                </li>
            </ul>
        </div>
    );
}
