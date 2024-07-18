import React from 'react';
import styles from "./index.module.css"
import { useNavigate } from 'react-router-dom';

function Summary({ userData, setUserData }) {
    const navigate = useNavigate()
    const handleBack = () => {
        setUserData({
            name: '',
            phone: '',
            scannedData: [],
            signature: ''
        })
        navigate('/')
    }
    return (
        <div className={styles.container} >
            <h1 className={styles.page_title}>Summary</h1>
            <p className={styles.summary_content}><strong>Name:</strong> {userData.name}</p>
            <p className={styles.summary_content}><strong>Phone:</strong> {userData.phone}</p>
            <h2 style={{ fontSize: "24px", fontWeight: "bold", marginTop: "12px" }}>Scanned QR Codes:</h2>
            <ul className={styles.qrcodes}>
                {userData.scannedData && userData.scannedData.map((item, index) => (
                    <li className={styles.qrcode_list} key={index}>{item}</li>
                ))}
            </ul>
            <h2 style={{ fontSize: "24px", fontWeight: "bold", marginTop: "12px" }}>Signature:</h2>
            {userData.signature && <img src={userData.signature} alt="User Signature" />}
            <button className={styles.next_button} onClick={handleBack}>back to home</button>
        </div >
    );
}

export default Summary;
