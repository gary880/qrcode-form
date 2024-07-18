import React, { useState, useCallback } from 'react';
import { Scanner, useDevices } from '@yudiel/react-qr-scanner';
import { useNavigate } from 'react-router-dom';
import styles from "./index.module.css"


function QRScanner({ userData, setUserData }) {

    const [listItems, setListItems] = useState(userData.scannedData || []);
    const [isScanning, setIsScanning] = useState(false);
    const [deviceId, setDeviceId] = useState(undefined);
    const navigate = useNavigate()
    const devices = useDevices();

    const handleScan = useCallback((data) => {
        if (data && data[0] && data[0].rawValue && !listItems.includes(data[0].rawValue)) {
            setListItems((prevItems) => {
                const updatedItems = [...prevItems, data[0].rawValue];
                return Array.from(new Set(updatedItems));
            });
        }
    }, []);

    const handleError = (err) => {
        console.error(err);
    };

    const toggleScanner = () => {
        setIsScanning(!isScanning);
    };

    const handleNext = () => {
        setUserData({ ...userData, scannedData: listItems });
        navigate('/signature');
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.page_title}>QR Code Scanner</h1>
            <div className={styles.user_form}>
                <button className={styles.next_button} onClick={toggleScanner}>
                    {isScanning ? 'Stop Scanner' : 'Start Scanner'}
                </button>
                <ul style={{ display: 'flex', flexDirection: "column" }}>
                    {listItems.map((item) => (
                        <li className={styles.qrcode_list} key={item}>
                            <p style={{ color: "#5BB6FF" }}>{item}</p>
                        </li>
                    ))}
                </ul>
                <select className={styles.user_input} onChange={(e) => setDeviceId(e.target.value)}>
                    <option value={undefined}>Select a device</option>
                    {devices.map((device, index) => (
                        <option key={index} value={device.deviceId}>
                            {device.label}
                        </option>
                    ))}
                </select>
                <div className={styles.scanner}>
                    <Scanner
                        formats={['qr_code', 'micro_qr_code', 'rm_qr_code']}
                        constraints={{ deviceId: deviceId }}
                        onScan={handleScan}
                        allowMultiple={false}
                        scanDelay={2000}
                        paused={!isScanning}

                    />
                </div>
                <button className={styles.next_button} onClick={handleNext}>Next</button>
            </div>
        </div>
    );
}


export default QRScanner;
