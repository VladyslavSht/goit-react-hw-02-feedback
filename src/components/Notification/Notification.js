import s from './Notification.module.css';
function Notification({ message = 'There is no feedback' }) {
  return (
    <div>
      <p className={s.notify}>{message}</p>
    </div>
  );
}

export default Notification;
