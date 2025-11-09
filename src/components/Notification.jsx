function Notification({ hasNewMessage}) {
    return (
      <div>
        <h2>Inbox</h2>
        {hasNewMessage && <p>You have new messages!</p>}
        {hasNewMessage && <h2>fariimo ayaad heshay</h2>}





      </div>
    );
}
export default Notification;