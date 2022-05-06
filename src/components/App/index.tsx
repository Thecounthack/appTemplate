import { Provider } from 'react-redux';
import store from '_redux/store';
import { ThemeProvider } from '_components/Theme/ThemeProvider';
import { Container } from '_components/Container';
import styles from './styles.module.scss';
import '_styles/main.scss';

export const App = () => {
    return (
        <Provider store={store}>
            <ThemeProvider>
                <Container>
                    <div className={styles.app}>Appp djksfn</div>
                </Container>
            </ThemeProvider>
        </Provider>
    );
};
