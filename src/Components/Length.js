
export default function Length({ title, changeTime, type, time, formatTime }) {
    return (
        <div>
            <h5>{title}</h5>
            <div className="time-sets">
                <button className="btn-small deep-purple lighten-2 downarrow-button" onClick={() => changeTime(-60, type)}>
                    <i className="material-icons">arrow_downward</i>
                </button>
                <h5>{formatTime(time)}</h5>
                <button className="btn-small deep-purple lighten-2 uparrow-button" onClick={() => changeTime(60, type)}>
                    <i className="material-icons">arrow_upward</i>
                </button>
            </div>
        </div>
    );
}