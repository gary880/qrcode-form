import React, { useRef } from 'react';
import SignatureCanvas from 'react-signature-canvas';
import { useNavigate } from 'react-router-dom';
import styles from "./index.module.css"

function Signature({ userData, setUserData }) {

    const sigCanvas = useRef({});
    const navigate = useNavigate()
    const clear = () => sigCanvas.current.clear();
    const handleNext = () => {
        setUserData({ ...userData, signature: sigCanvas.current.getTrimmedCanvas().toDataURL('image/png') });
        navigate('/summary');
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.page_title}>Signature</h1>
            <div className={styles.user_form}>
                <SignatureCanvas
                    penColor="black"
                    ref={sigCanvas}
                    canvasProps={{ width: 300, height: 200, className: 'sigCanvas' }}
                />
                <button style={{ marginBottom: "12px" }} className={styles.next_button} onClick={clear}>Clear</button>
                <button className={styles.next_button} onClick={handleNext}>Next</button>
            </div>
        </div>
    );
}

export default Signature;
