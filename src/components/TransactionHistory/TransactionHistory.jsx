import PropTypes from "prop-types";
import css from 'components/TransactionHistory/TransactionHistory.module.css'
export const TransactionHistory = ({items}) => {
  return (
    <table className={css['transaction-history']}>
        <thead>
            <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
            </tr>
        </thead>
        <tbody>
            {items.map(e => <TransactionHistoryItem  key={e.id} {...e}/>)}
        </tbody>
    </table>
  )
}

function TransactionHistoryItem({ type, amount, currency}){
    return (
    <tr>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
    </tr>
    )
}
 TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
      id:PropTypes.string.isRequired,
    }))
 }

 TransactionHistoryItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired
 }