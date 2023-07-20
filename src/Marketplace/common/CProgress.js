import { ProgressBar } from 'react-bootstrap';

const CProgress = (props) => {
    return (
        <>
                <ProgressBar
                now={props.progress}
                />
        </>
    )
}

export default CProgress;
