import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Notices from '../pages/Notices';
import NotFound from '../pages/NotFound';
import About from '../pages/About';

function WebRouting() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/notices" element={<Notices />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default WebRouting;
