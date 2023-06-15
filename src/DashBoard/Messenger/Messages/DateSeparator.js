
const DateSeparator = ({ date }) => {

    return (
        <div style={{
            width: '95%',
            backgroundColor: '#b9bbbe',
            height: '1px',
            position: 'relative',
            marginTop: '20px',
            marginBottom: '10px',
        }}>
            <span style={{
                backgroundColor: '#36393f',
                position: 'absolute',
                top: '-10px',
                left: '45%',
                color: '#b9bbbe',
                padding: '0 5px',
                fontSize: '14px'
            }}>
                {date}
            </span>
        </div>
    )
}

export default DateSeparator;