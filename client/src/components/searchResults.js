import styles from "../styles/Home.module.css"
export default function SearchResults(props){
    console.log(`send props`,props)
return(
    <section className={styles.searchResults}>

        <p className={styles.amountofTrnx}>Latest 25 Transaction out of {""}
        <span className={styles.blueText}>{props?.result?.result?.length}</span>
        {} transactions
         </p>
         <table className={styles.txnSection}>
            <thead>
                <tr className={styles.txnTitle}></tr>
                <th>Transaction Hash</th>
                <th>Method</th>
                <th>Block</th>
                <th>Age</th>
                <th>from</th>
                <th></th>
                <th>To</th>
                <th>Value</th>
                <th>Trans Fee</th>

            </thead>
        
         </table>
    </section>
)
}