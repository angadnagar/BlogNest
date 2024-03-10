import styles from './footer.module.css';
const Footer = ()=>{
    return(
        <div className={styles.container}>
           
           <div className={styles.logo}>devAgency</div>
           <div className={styles.text}>creative dev agency ©️ All rights reserved.</div>
         </div>
    )
}

export default Footer