import {Row,Col} from "antd";
import "./Home.css"
import HeroSection from "../component/HeroSection";


export default function Home(){
    return(
        <Row align="middle" justify="center" style={{width:"100vw",height:"100vh",backgroundColor:"#F7F7F7"}}>
            <Col  className="left" span={12} >
                <HeroSection/>
            </Col>
            
            <Col className="right" span={12} style={{ backgroundColor:"#fff",height:"100vh"}}></Col>
             
        </Row>
    );
}