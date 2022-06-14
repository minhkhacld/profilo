import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Col, ColCenter } from '../../../kits/stucture/component.stucture';
// import RotateFrame from '../../skill/quote/textaniamtion/Rotate.Frame';
import AnimatedText from './text/AnimatedText';
import Button from '@mui/material/Button';
import myCV from '../../../../assets/pdf/Software_Developer_Pham_Minh_Kha.pdf';

const HomeQuote = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const path = location.pathname.split('/');
    const _onGoToContact = () => {
        if (path[path.length - 1] === "") {
            document.getElementById("contact-section").scrollIntoView({ block: 'start', behavior: 'smooth' });
        } else {
            navigate("/contact");
        }
    }

    const text1Str = "Hi,";
    const text2Str = "I'm Kha,";
    const text3Str = "web developer";

    return (
        <Col className="home-quote">
            {/* <RotateFrame from={0} to={360} />
            <RotateFrame from={5} to={365} />
            <RotateFrame from={10} to={370} /> */}
            <AnimatedText text={text1Str} />
            <AnimatedText text={text2Str} />
            <AnimatedText text={text3Str} />
            <ColCenter onClick={() => _onGoToContact()} className="home-quote-link" style={{ textTransform: 'capitalize', }}>Contact me</ColCenter>

            <a href={myCV} download="Kha's Resume" style={{ marginTop: '1.5rem', textDecoration: 'none', }}>
                <Button variant="outlined" color="info" className="btn-download-cv">Download my CV</Button>
            </a>
        </Col>
    )
}

export default HomeQuote