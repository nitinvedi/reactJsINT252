import MountainPic from '../assets/mountain.png'
export default function WelcomeContainer() {
    return (
        <div className="welcome-container">
            <h2>Hello, Welcome to my React App</h2>
            <img src={MountainPic} alt="no image found" />
        </div>
    )
}