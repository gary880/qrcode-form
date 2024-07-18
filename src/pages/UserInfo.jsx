import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './index.module.css';
import PwaInstallButton from '../components/PwaInstallButton';

function UserInfo({ userData, setUserData }) {
    const [name, setName] = useState(userData.name || '');
    const [phone, setPhone] = useState(userData.phone || '');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setUserData({ ...userData, name, phone });
        navigate('/qrscanner');
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.page_title}>User Information</h1>
            <PwaInstallButton />
            <form onSubmit={handleSubmit} className={styles.user_form}>
                <label>
                    Name:
                    <input
                        className={styles.user_input}
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </label>
                <br />
                <label>
                    Phone:
                    <input
                        className={styles.user_input}
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                    />
                </label>
                <br />
                <button className={styles.next_button} type="submit">Next</button>
            </form>
        </div>
    );
}

export default UserInfo;
