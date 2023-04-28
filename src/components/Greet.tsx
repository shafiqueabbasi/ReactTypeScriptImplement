type GreetProps = {
    name: string
    messageCount: number
    isLoggedIn: boolean
}

function Greet(props: GreetProps) {
    return (
        <div className="App">
            <h2>
                {
                    props.isLoggedIn ? `Welcome ${props.name}! You have ${props.messageCount} new messages` 
                    : "Welcome Guest"
                }
            </h2>
        </div>
    );
}

export default Greet;

