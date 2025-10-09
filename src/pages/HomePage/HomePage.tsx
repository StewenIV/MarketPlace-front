import {Helmet} from "react-helmet";
import {TestDiv} from "./styled";

const HomePage: React.FC = () => {
    return <>
    <Helmet>
        <title>Главная - Marketplace</title>
        <meta name="description" content="Главная страница маркетплейса" />
    </Helmet>
    <h1>Главная</h1>
    <TestDiv />
    </>
}

export default HomePage