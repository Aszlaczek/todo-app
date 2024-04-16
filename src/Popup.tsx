// import face from './assets/sentiment_content_FILL0_wght400_GRAD0_opsz24.svg'
import face2 from './assets/sentiment_worried_FILL0_wght400_GRAD0_opsz24.svg'
// import face3 from './assets/sentiment_frustrated_FILL0_wght400_GRAD0_opsz24.svg'

export default function Popup() {


    return (
        <div className="popup-container">
            <h1>There is no action available</h1>
            <h3>Please add some</h3>
            <img src={face2} alt="" />
        </div>
    )
}
