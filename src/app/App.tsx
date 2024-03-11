import { Header } from 'widgets/Header';
import styles from './App.module.css';
import { JokesContainer } from 'widgets/JokesContainer';

function App() {

    return (
        <section className={styles.app}>
            <Header className={styles.header}/>
            <JokesContainer className={styles.jokesContainer}/>
        </section>
    )
}

export default App
