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
 TransactionHistory.protoTypes = {
    items: PropTypes.arrayOf(PropTypes.exact({
      id:PropTypes.string.isRequired,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string
    }))
 }