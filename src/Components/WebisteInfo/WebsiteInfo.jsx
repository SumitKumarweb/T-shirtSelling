import google from './google.png'
import travel from './travel.png'
import support from './support.png'
import emoji from './emoji.png'
import './WebsiteInfo.css'
function WebsiteInfo() {
    return (
        <div className="WebsiteInfo">
            <div className="detail">
                <img src={google} alt="" />
                <div className="info">
                    <h1>Google Review</h1>
                    <h3>4.5 Star Review Rating</h3>
                </div>
            </div>
            <div className="detail">
                <img src={travel} alt="" />
                <div className="info">
                    <h1>Google Review</h1>
                    <h3>4.5 Star Review Rating</h3>
                </div>
            </div>
            <div className="detail">
                <img src={emoji} alt="" />
                <div className="info">
                    <h1>Google Review</h1>
                    <h3>4.5 Star Review Rating</h3>
                </div>
            </div>
            <div className="detail">
                <img src={support} alt="" />
                <div className="info">
                    <h1>Google Review</h1>
                    <h3>4.5 Star Review Rating</h3>
                </div>
            </div>
        </div>
    )
}
export default WebsiteInfo;