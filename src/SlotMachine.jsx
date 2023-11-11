import './SlotMachine.css'

export default function SlotMachine() {
    const emojiArray = ['😘', '💜', '💕'];
    // const randIndex = () => Math.floor(Math.random() * 2);
    const emoji1 = emojiArray[Math.floor(Math.random() * 3)];
    const emoji2 = emojiArray[Math.floor(Math.random() * 3)];
    const emoji3 = emojiArray[Math.floor(Math.random() * 3)];
    const allEqual = emoji1 === emoji2 && emoji2 === emoji3;

    const winStyle = { color: 'green', fontSize: '1.3rem' };
    const winMessage = `This one is a winner! Have I reminded you of how sexy you are lately ? `

    const loseStyle = { color: 'red', fontSize: '1.3rem' };
    const loseMessage = `This one is a loser. But you get to keep trying:)`

    // return (
    //     <div>
    //         {emojiArray}
    //         <p></p>
    //         {emoji1}
    //         {emoji2}
    //         {emoji3}
    //     </div>
    // )

    return (
        <div className="emojis" >
            <p>{emoji1}~~{emoji2}~~{emoji3}</p>
            <div style={allEqual ? winStyle : loseStyle}>
                {allEqual ? winMessage : loseMessage}
            </div>
        </div>
    )
}